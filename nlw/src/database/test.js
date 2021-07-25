const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => { 
    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2226333",
        lng: "-49.6555874",
        name: "Lar dos Meninos",
        about:'Presta assistência a crianças de 06 a 15 anos em situação de riscos e/ou vulnerabilidade social.',
        whatsapp: "981257463",
        images:[
            "https://images.unsplash.com/photo-1602389569471-5df5bde61968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI3MDU4MTAx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

            "https://images.unsplash.com/photo-1614614158529-1c1a9639aee8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjI3MDU4MTY4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ].toString(),
        instructions: "Venha quando se sentir a vontade e traga muito amor e carinho para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0",


    })

    //Consultar dados da tabela
    const selectedOrphanage = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanage)

    //Consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // deletar dado da tabela
    console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
    console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
})
