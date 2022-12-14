const express=require('express');
const router =express.Router();
router.get('/',(req,res)=>{
    res.render('home');
});
router.get('/index',(req,res)=>{
    res.render('index');
});
router.get('/index/register',(req,res)=>{
    res.render('register');
});
router.get('/index/login',(req,res)=>{
    res.render('login');
});
router.get('/index/forget_pass',(req,res)=>{
    res.render('forget_pass');
});
router.get('/index/login/search',(req,res)=>{
    res.render('search')
})
router.get('/index/login/search/viewed_bird_post',(req,res)=>{
    res.render('viewed_bird_post')
})
router.get('/index/login/search/viewed_pet_post',(req,res)=>{
    res.render('viewed_pet_post')
})
router.get('/index/login/search/birds-and-pets',(req,res)=>{
    res.render('birds-and-pets')
})
router.get('/index/login/search/birds-and-pets/sell-your-brid',(req,res)=>{
    res.render('sell-your-brid')
})
router.get('/index/login/search/birds-and-pets/sell-your-pet',(req,res)=>{
    res.render('sell-your-pet')
})
router.get('/index/login/search/account',(req,res)=>{
    res.render('account')
})
router.get('/index/login/search/contact-us',(req,res)=>{
    res.render('contact-us')
})
router.get('/index/login/search/messanger',(req,res)=>{
    res.render('messanger')
})
router.get('/index/login/search/account/update_account',(req,res)=>{
    res.render('update_account')
})
router.get('/index/login/search/contact-us/feedback',(req,res)=>{
    res.render('feedback')
})


module.exports=router;