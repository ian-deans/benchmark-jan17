const gateStates = {
  CLOSED: 'CLOSED',
  OPENING: 'OPENING',
  PAUSED: 'PAUSED',
  CLOSING: 'CLOSING',
  OPEN: 'OPEN'
}

const gateCommands = {
  REMOTE_CLICKED: 'remoteClicked',
  CYCLE_COMPLETE: 'cycleComplete'
}



export default class FiniteGate {
  constructor() {
    this.status = gateStates.CLOSED,
    this.nextStatus = gateStates.OPENING
  }

  processSequence( commandsString ) {
    return commandsString.split('\n')
  }

  performCommands( commandsString ) {

    const commands = this.processSequence( commandsString )

    for ( let x = 0; x < commands.length; x++ ) {
      this.broadcastStatus()
      this.broadcastCommand( commands[ x ] )

      switch( this.status ) {

        case gateStates.CLOSED:
          if ( this.commandIsClick( commands[ x ] ) ) {
            this.status = gateStates.OPENING
            this.nextStatus = gateStates.OPEN
            break
          }
          return

        case gateStates.OPEN:
          if ( this.commandIsClick( commands[ x ] ) ) {
            this.status = gateStates.CLOSING
            this.nextStatus = gateStates.CLOSED
            break;
          }
          return;

        case gateStates.CLOSING:
          if ( this.commandIsClick( commands[ x ] ) ) {
            this.status = gateStates.PAUSED
            this.nextStatus = gateStates.OPENING
                        break;
          }
          if ( this.commandIsCompleteCycle( commands[ x ] ) ) {
            this.status = this.nextStatus
            this.nextStatus = gateStates.OPENING
            break;
          }
          return;

        case gateStates.OPENING:
          if ( this.commandIsClick( commands[ x ] ) ) {
            this.status = gateStates.PAUSED
            this.nextStatus = gateStates.CLOSING
            break;
          }
          if ( this.commandIsCompleteCycle( commands[ x ] ) ) {
            this.status = this.nextStatus
            this.nextStatus = gateStates.CLOSING
            break;
          }
          return;

        case gateStates.PAUSED:
          if ( this.commandIsClick( commands[ x ] ) ) {
            this.status = this.nextStatus
            this.nextStatus = this.isOpening()
              ? gateStates.OPEN
              : gateStates.CLOSED
            break
          }
          return;

      }

    }
    this.broadcastStatus()
  }

  commandIsClick( command ) {
    return command === gateCommands.REMOTE_CLICKED
  }

  commandIsCompleteCycle( command ) {
    return command === gateCommands.CYCLE_COMPLETE
  }

  isOpening() {
    return this.status === gateStates.OPENING
  }

  broadcastStatus() {
    if ( this.status === gateStates.PAUSED ) {

      const prevStatus = this.nextStatus === gateStates.OPENING
        ? gateStates.CLOSING
        : gateStates.OPENING

      console.log( `GATE: STOPPED_WHILE_${prevStatus}` )
    } else {
    console.log( `GATE: ${this.status}` )
    }
  }

  broadcastCommand( command ) {
    console.log( command )
  }

}
