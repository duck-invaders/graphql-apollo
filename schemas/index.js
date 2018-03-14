import pg from './../pg';
import astronaute from './astronaute';
import planet from './planet';
import grade from './grade';
import planetAstronaute from './planet-astronaute';

planetAstronaute.down(pg).then(() => {
    console.log('planet-astronaute DROP');
    return astronaute.down(pg);
}).then(() => {
    console.log('astronaute DROP');
    return grade.down(pg);
}).then(() => {
    console.log('grade City DROP');
    return planet.down(pg);
}).then(() => {
    console.log('planet DROP');
    return planet.up(pg);
}).then(() => {
    console.log('planet CREATE');
    return grade.up(pg);
}).then(() => {
    console.log('grade CREATE');
    return astronaute.up(pg);
}).then(() => {
    console.log('astronaute CREATE');
    return planetAstronaute.up(pg);
}).then(() => {
    console.log('planetAstronaute City CREATE');
}).then(() => {
    console.log('Success !');
    process.exit();
}).catch((e) => {
    console.log(e);
});