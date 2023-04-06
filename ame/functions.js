const devUrl = vars.DEVURL;
const hmlUrl = vars.HMLURL;
const prodUrl = vars.PRDURL;

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

function Miniapp () {
    this.id = 'id';
    this.title = 'title';
    this.slug = 'slug';
    this.type = 'type';
    this.target = 'target';
    this.permission = 'permission';
    this.status = 'status';
    this.featureToggleKey = 'FT';
    this.visible = 'visible';
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
                <p>STATUS: ${miniappObj.status}</p>
                <p>VISIBLE: ${miniappObj.visible}</p>
                <p>TYPE: ${miniappObj.type}</p>
                <p>TARGET: ${miniappObj.target}</p>
                <p>PERMISSIONS: ${miniappObj.permissions}</p>
                <p>FT: ${miniappObj.featureToggleKey}</p>
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


    XLSX.writeFile(wb, `miniapps-exported.xlsx`)
}