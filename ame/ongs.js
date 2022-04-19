async function getMiniapps(){
    return fetch('https://miniapps.amedigital.com/miniapp-manager-api/o/mini-apps/').then(result => result.json())
}

async function getOngsPk(){
    return fetch('/ongs').then(result => result.json())
}

async function getOngs(){
    const output = await getMiniapps()
    const ongsSelection = await getOngsPk()
    let ongs = []
    
    output.miniApps.forEach(miniApp => {
        if ( ongsSelection.includes(miniApp.publicKey) ) {
            ongs.push({name:miniApp.name, title:miniApp.title, slug:miniApp.slug, parentSlug:miniApp.parentSlug, category1:miniApp.category1, category2:miniApp.category2, description:miniApp.description, featureToggleKey:miniApp.featureToggleKey, publicKey:miniApp.publicKey})
        }
        
    })
    
    return ongs
}

async function exportOngs(){
    const listOngs = await getOngs()

    let wb = XLSX.utils.book_new();
    wb.SheetNames.push('Ongs')

    const sheetContent = XLSX.utils.json_to_sheet(listOngs)
    wb.Sheets['Ongs'] = sheetContent


    XLSX.writeFile(wb, `ongs-exported.xlsx`)
}

console.log(getOngs())