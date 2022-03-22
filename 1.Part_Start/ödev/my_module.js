async function getData(userid){
    let { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + userid);
    let { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + userid);

    //posts adında bir id açılıyor, gelen post bilgisi array içinde object olarak gönderiliyor.
    user.posts = [{...post}];
    console.log(user);
};

export default getData;