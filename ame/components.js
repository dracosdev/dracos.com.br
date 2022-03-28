fetch('https://miniapps.amedigital.com/miniapp-manager-api/o/mini-apps/')
  .then(result => result.json())
  .then((output) => {

    let min = Infinity
    let url = ''

    let componentsVersions = {}
    output.miniApps.forEach(miniApp => {
        if (!miniApp.revisions) return;
        miniApp.revisions.forEach(revision => {
            if (min > revision.createdAt && revision.cliComponentsVersion) {
                min = revision.createdAt
                url = revision.url
            }
            if (revision.status === 'PUBLISHED') {
                const compVersion = revision.cliComponentsVersion || 'NA'
                const current = componentsVersions[compVersion] || 0;
                componentsVersions[compVersion] = current + 1
            }
        })
    })

  }).catch(err => console.error(err));