const devUrl = 'https://miniapps.dev.amedigital.com/miniapp-manager-api/o/mini-apps/';
const hmlUrl = 'https://miniapps.hml.amedigital.com/miniapp-manager-api/o/mini-apps/';
const prodUrl = 'https://miniapps.amedigital.com/miniapp-manager-api/o/mini-apps/';

function getDevMiniapps() { return fetch(devUrl).then(result => result.json()); }
function getHmlMiniapps() { return fetch(hmlUrl).then(result => result.json()); }
function getProdMiniapps() { return fetch(prodUrl).then(result => result.json()); }


async function getMiniapps(env){
    let fullList;
    
    if (env === 'dev'){
        fullList = await getDevMiniapps();
    } else if (env === 'hml') {
        fullList =  await getHmlMiniapps();
    } else if (env === 'prod'){
        fullList =  await getProdMiniapps();
    }

    return fullList;
}

async function filterMiniapps(){

}


async function exportMiniapps(){
    
}

function testMiniapps(url){
    console.log(getMiniapps(url));
}


// loop for ongs filtering
/*
fullList.miniApps.forEach(miniApp => {
    
    if ( ongsSelection.includes(miniApp.publicKey) ) {
        ongs.push({name:miniApp.name, title:miniApp.title, slug:miniApp.slug, parentSlug:miniApp.parentSlug, category1:miniApp.category1, category2:miniApp.category2, description:miniApp.description, featureToggleKey:miniApp.featureToggleKey, publicKey:miniApp.publicKey})
    }
    
    
})
*/