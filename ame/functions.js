const devUrl = 'https://miniapps.dev.amedigital.com/miniapp-manager-api/o/mini-apps/';
const hmlUrl = 'https://miniapps.hml.amedigital.com/miniapp-manager-api/o/mini-apps/';
const prodUrl = 'https://miniapps.amedigital.com/miniapp-manager-api/o/mini-apps/';

function mountMiniapp(miniappObj){
    let miniapp = `
        <div>
            <p>ID: ${miniappObj.id}</p>
            <p>TITLE: ${miniappObj.title}</p>
            <p>SLUG: ${miniappObj.slug}</p>
            <p>TYPE: ${miniappObj.type}</p>
            <p>STATUS: ${miniappObj.status}</p>
            <p>FT: ${miniappObj.featureToggleKey}</p>
            <p>VISIBLE: ${miniappObj.visible}</p>
        </div>
    `;
    return miniapp
}

function getMiniapps(envUrl){
    return fetch(envUrl).then(result => result.json());
}

async function loadMiniapps(envUrl){
    document.getElementById('loading').style.display = 'flex';
    let miniappsList = await getMiniapps(envUrl);
    document.getElementById('loading').style.display = 'none';
    miniappsList.miniApps.forEach(miniappObj => {
        let miniapp = `
            <div class="miniappCard">
                <p>ID: ${miniappObj.id}</p>
                <p>TITLE: ${miniappObj.title}</p>
                <p>SLUG: ${miniappObj.slug}</p>
                <p>TYPE: ${miniappObj.type}</p>
                <p>STATUS: ${miniappObj.status}</p>
                <p>FT: ${miniappObj.featureToggleKey}</p>
                <p>VISIBLE: ${miniappObj.visible}</p>
            </div>
        `;
        document.getElementById('miniappList').innerHTML += miniapp;
    });
}

async function filterMiniapps(){

}


async function exportMiniapps(){
    const listOngs = await getOngs()

    let wb = XLSX.utils.book_new();
    wb.SheetNames.push('Ongs')

    const sheetContent = XLSX.utils.json_to_sheet(listOngs)
    wb.Sheets['Ongs'] = sheetContent


    XLSX.writeFile(wb, `ongs-exported.xlsx`)
}


// loop for ongs filtering
/*
fullList.miniApps.forEach(miniApp => {
    
    if ( ongsSelection.includes(miniApp.publicKey) ) {
        ongs.push({name:miniApp.name, title:miniApp.title, slug:miniApp.slug, parentSlug:miniApp.parentSlug, category1:miniApp.category1, category2:miniApp.category2, description:miniApp.description, featureToggleKey:miniApp.featureToggleKey, publicKey:miniApp.publicKey})
    }
    
    
})
*/