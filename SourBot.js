const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = 's!';

const fs = require('fs');
const { createInterface } = require('readline');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


function emoji (id) {
    return client.emojis.get(id).toString ();
}


client.once('ready', () => {
    console.log('SourBot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'youtube':
            client.commands.get('youtube').execute(message, args);
            break;
        case 'saysourgrapes':
            client.commands.get('saysourgrapes').execute(message, args);
            break;
        case 'yt':
            client.commands.get('youtube').execute(message, args);
            break;
        case 'ssg':
            client.commands.get('saysourgrapes').execute(message, args);
            break;
        case 'say sour grapes':
            client.commands.get('saysourgrapes').execute(message, args);
            break;
        case 'test':
            client.commands.get('test').execute(message, args);
            break;
        case 'givetestrole':
            client.commands.get('givetestrole').execute(message, args);
            break;
        case 'gtr':
            client.commands.get('givetestrole').execute(message, args);
            break;
        case 'give test role':
            client.commands.get('givetestrole').execute(message, args);
            break;
        case 'gettestrole':
            client.commands.get('givetestrole').execute(message, args);
            break;
        case 'get test role':
            client.commands.get('givetestrole').execute(message, args);
            break;
        case 'removetestrole':
            client.commands.get('removetestrole').execute(message, args);
            break;
        case 'rtr':
            client.commands.get('removetestrole').execute(message, args);
            break;
        case 'remove test role':
            client.commands.get('removetestrole').execute(message, args);
            break;
        case 'givetestroletest':
            client.commands.get('givetestroletest').execute(message, args);
            break;
        case 'gtrt':
            client.commands.get('givetestroletest').execute(message, args);
            break;
        case 'give test role test':
            client.commands.get('givetestroletest').execute(message, args);
            break;
        case 'gettestroletest':
            client.commands.get('givetestroletest').execute(message, args);
            break;
        case 'get test role test':
            client.commands.get('givetestroletest').execute(message, args);
            break;
        case 'removetestroletest':
            client.commands.get('removetestroletest').execute(message, args);
            break;
        case 'rtrt':
            client.commands.get('removetestroletest').execute(message, args);
            break;
        case 'remove test role test':
            client.commands.get('removetestroletest').execute(message, args);
            break;
        case 'help':
            client.commands.get('help').execute(message, args);
            break;
        case 'die':
            client.commands.get('die').execute(message, args);
            break;
        case 's!':
            client.commands.get('s!').execute(message, args);
            break;
        case 'sourgrapes':
            client.commands.get('sourgrapes').execute(message, args);
            break;
        case 'sg':
            client.commands.get('sourgrapes').execute(message, args);
            break;
        case 'sourgrapessong':
            client.commands.get('sourgrapes').execute(message, args);
            break;
        case 'sgs':
            client.commands.get('sourgrapes').execute(message, args);
            break;
        case 'sourgrapeshour':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sgh':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sourgrapes1hour':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sourgrapes1h':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sourgrapesh':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sg1h':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sgh':
            client.commands.get('sourgrapeshour').execute(message, args);
            break;
        case 'sourgrapesgif1':
            client.commands.get('sourgrapesgif1').execute(message, args);
            break;
        case 'sourgrapesgif':
            client.commands.get('sourgrapesgif1').execute(message, args)
            break;
        case 'sgg':
            client.commands.get('sourgrapesgif1').execute(message, args);
            break;
        case 'sgg1':
            client.commands.get('sourgrapesgif1').execute(message, args);
            break;
        case 'sour grapes gif 1':
            client.commands.get('sourgrapesgif1').execute(message, args);
            break;
        case 'sour grapes gif':
            client.commands.get('sourgrapesgif1').execute(message, args);
            break;
        case 'sourgrapesgif2':
            client.commands.get('sourgrapesgif2').execute(message, args);
            break;
        case 'sgg2':
            client.commands.get('sourgrapesgif2').execute(message, args);
            break;
        case 'sour grapes gif 2':
            client.commands.get('sourgrapesgif2').execute(message, args);
            break;
        case 'nosourgrapesgif':
            client.commands.get('nosourgrapesgif').execute(message, args);
            break;
        case 'nsgg':
            client.commands.get('nosourgrapesgif').execute(message, args);
            break;
        case 'no sour grapes gif':
            client.commands.get('nosourgrapesgif').execute(message, args);
            break;
        case 'pmbui3dgif':
            client.commands.get('pmbui3dgif').execute(message, args);
            break;
        case 'picturemybootyupin3dgif':
            client.commands.get('pmbui3dgif').execute(message, args);
            break;
        case 'picture my booty up in 3d gif':
            client.commands.get('pmbui3dgif').execute(message, args);
            break;
        case 'bootygif':
            client.commands.get('pmbui3dgif').execute(message, args);
            break;
        case 'booty gif':
            client.commands.get('pmbui3dgif').execute(message, args);
            break;
        case 'superheromovie':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'mysuperheromovie':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'superhero movie':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'my superhero movie':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'superheromoviehour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'mysuperheromoviehour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'superhero movie hour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'my superhero movie hour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'sm':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'shm':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'smhour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'shmh':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'shmhour':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'msm':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'mshm':
            client.commands.get('superheromovie').execute(message, args);
            break;
        case 'msmh':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'mshmh':
            client.commands.get('superheromoviehour').execute(message, args);
            break;
        case 'sans':
            client.commands.get('sans').execute(message, args);
            break;
    }

})

client.login('');
