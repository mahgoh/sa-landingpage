import data from '../data/parking-facilities.json' with { type: 'json' }
import fs from 'fs'
import path from 'path'

const markers = data.features.map(feature => {
    return { name: 'P+R ' + feature.properties.displayName, coordinates: feature.geometry.coordinates}})

fs.writeFileSync(path.resolve('./public/markers/parking.json'), JSON.stringify(markers))
