const schedule = require('node_schedule')

const tarefa1 = schedule.scheduledJobs('*/5 * 18 * * 0', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Executando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduledJobs(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})