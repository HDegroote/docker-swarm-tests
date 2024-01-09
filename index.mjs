import Hyperswarm from 'hyperswarm'
import b4a from 'b4a'
import goodbye from 'graceful-goodbye'

const seed = b4a.from(process.argv[2], 'hex')
console.log(process.argv)

const swarm = new Hyperswarm()
swarm.on('connection', (conn, info) => {
  console.log('connected with', info.publicKey)
  conn.on('data', d => console.log('received message', d.toString()))
  // const interval = setInterval(() => conn.write('A message from me'), 15000)
  // conn.on('close', () => clearInterval(interval))
  conn.on('error', (e) => console.error(e))
})

console.log('Joining swarm on', seed)
swarm.join(seed, { server: true, client: true })

goodbye(() => swarm.destroy())