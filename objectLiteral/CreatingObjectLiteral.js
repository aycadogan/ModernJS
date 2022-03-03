let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@cornerstone.com',
    location: 'Vancouver',
    blogs: [{ 
        title: 'the first title', likes:30},
        {title: 'the second title', likes:50}
    ],
    login: function greet(){
        console.log('the user logged in')
    },
    logout: function bye(){
        console.log('bye')
    },
    logBlogs(){
        this.blogs.forEach( blog =>
            console.log(blog.title,blog.likes)
        )
    }
}

console.log(user)
console.log(user.name)

user.age = 35
console.log(user.age)

console.log(user['location'])

console.log(typeof user)

user.login()
user.logout()

user.logBlogs()