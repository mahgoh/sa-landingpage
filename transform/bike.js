import data from '../data/bike_parking.json' with { type: 'json' }
import fs from 'fs'
import path from 'path'

const markers = data.features.map(feature => {
    return { name:feature.properties.name, coordinates: feature.geometry.coordinates}})

fs.writeFileSync(path.resolve('./public/markers/bike.json'), JSON.stringify(markers))

console.log(markers)