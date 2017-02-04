import FiniteGate from './FiniteGate'

const commandString =
`remoteClicked
cycleComplete
remoteClicked
remoteClicked
remoteClicked
remoteClicked
remoteClicked
cycleComplete`

const gate = new FiniteGate()

gate.performCommands( commandString )
