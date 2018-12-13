const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('meandb',['accounts']);

router.get('/accounts',(req,res,next)=>{

    db.account.find((err,accounts)=>{
        if (err) return next(err);
        res.json(accounts);
    })

});

router.get('/accounts/:id',(req,res,next)=>{

    db.account.findOne({_id: mongojs.ObjectId(req.params.id)},(err,accounts)=>{
        if (err) return next(err);
        res.json(accounts);
    })

});

router.post('/accounts',(req,res,next)=>{
    const account = req.body;
    if (!account.title || !(account.isDone + '')){
        res.status(400).json({
            error:'not found' 
        })
    }else{

        db.account.save(account,(err,account) =>{
            if (err) return next(err);
            res.json(account);
        });

    }

});

router.put('/account/:id',(req,res,next)=>{
    const account = req.body;
    const updateaccount = {};

    if(account.isDone){
        updateaccount.isDone = account.isDone;
    }
    if(account.title){
        updateaccount.title = account.title;
    }
    if(!updateaccount){
        res.status(400).json({
            error:'bad request'
        });
    }else{
        db.account.update({id:mongojs.ObjectId(req.params.id)},(err, account)=>{
            if(err) return next(err);
            res.json(account);
        });
    }

   
});

router.delete('/account/:id',(req,res,next) =>{
    db.accounts.remove({_id: mongojs.ObjectId(req.params.id)},(err,result)=>{
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;