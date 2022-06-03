const UserSchema=new mongoose.Schema({
       name:{type:String,required:true},
       email:{type:String,required:true},
       password:{type:String,required:true},
       Followers:[]
      
})
const User=mongoose.model("user",UserSchema )

const TweetSchema=new mongoose.Schema({
       userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
       likes:{likes_counter:0,liked_User:[]},
       comments:{commemts_counter:0,Comment_User:[]}
       
 })
 const TweetS=mongoose.model("tweet",TweetSchema )

 const FollwersSchema=new mongoose.Schema({
       userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
       
 })

 const Follower=mongoose.model("follower",FollwersSchema )

 