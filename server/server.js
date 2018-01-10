var express     = require('express'),
    mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
  methodOverride= require('method-override'),
    cors        = require('cors'),    
    app         = express();

mongoose.connect('mongodb://localhost', { useMongoClient: true});
    
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use(cors());

/*
date: String,
author: String,
feedings: [
    {
        time: String,
        fAmount: 
        bmAmount: {type: Number, default: 0}
        pee: {type: Boolean, default: false},
        poop: {type: Boolean, default: false}
    }
]
*/
var Feeding = mongoose.model('Feeding', {
    date: String,
    parent: String,
    feedings: [
        {
            time: String,
            fAmount: { type: Number, default: 0},
            bmAmount: { type: Number, default: 0 },
            pee: { type: Boolean, default: false },
            poop: { type: Boolean, default: false },
            parent: String
        }
    ]
});

// Routes

// Get all feedings
app.get('/api/feedings', (req, res) => {
    console.log('fetching feedings..');

    Feeding.find((err, feedings) => {
        if(err)
            res.send(err);
        console.log('Feedings found');
        res.json(feedings);
    });
});

// Create new Feeding & send back all feedings
app.post('/api/feedings', (req, res) => {
    console.log(req.body);
    console.log('creating feeding..');
    var todaysFeeding = new Feeding({
        date: req.body.feeding.date,
        parent: req.body.feeding.parent,
        feedings: [
            {
                time: req.body.feed.time,
                fAmount: req.body.feed.fAmount,
                bmAmount: req.body.feed.bmAmount,
                pee: req.body.feed.pee,
                poop: req.body.feed.poop,
                parent: req.body.feeding.parent
            }
        ]
    });

    todaysFeeding.save((err, feeding) => {
        if(err)
            res.send(err);
        Feeding.find({}, (err, feedings) => {
            if(err)
                res.send(err);

            res.json(feedings);
        });
    });
});

app.delete('/api/feedings/:feeding_id', (req, res) => {
    console.log('Delete called');
    Feeding.findByIdAndRemove(req.params.feeding_id, (err, feeding) => {
        if(err)
            res.send(err);

        res.json({message: "Feeding deleted"});
    });
});


app.listen(8080);
console.log("App listening on port 8080");
