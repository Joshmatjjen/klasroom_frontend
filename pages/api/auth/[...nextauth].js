import Providers from "next-auth/providers";
import NextAuth from "next-auth";

const options = {
    providers: [
        Providers.Credentials({
            id: "credentials",
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                profile: { label: "profile", type: "object" },
                
            },

            authorize: async (credentials) => {
                // Add logic here to look up the user from the credentials supplied
                const user = JSON.parse(credentials.profile)

                if (user) {
                    return Promise.resolve({user, type: 'signin'})
                } else {
                    return Promise.resolve(null)
                }
                // if(credentials.form === "RootForm"){
                //    const user = await Api.loginRootUser({email: credentials.email, password: credentials.password})

                //     if (user) {
                //         return Promise.resolve({user, type: 'signin'})
                //     } else {
                //         return Promise.resolve(null)
                //     }

                // }else if(credentials.form === "PracticeForm"){
                //     const user = await Api.loginPractice({email: credentials.email, password: credentials.password})

                //     if (!user.errors && !user.error) {
                //         console.log('user1: ', user)
                //         return Promise.resolve({user, type: 'signin'})
                //     } else {
                //         console.log('user2: ', user)
                //         Actions.setMessage({type: 'error', message: user.errors ? user.errors[0] : user.error ? user.error : 'Login failed!' })
                //         return Promise.reject(`/?error=${user.errors ? user.errors[0] : user.error ? user.error : 'Login failed!'}`);
                //     }         

                // }else if(credentials.form === "UserForm"){
                //    const user = await Api.loginStaffUser({email: credentials.email, password: credentials.password})

                //     if (user) {
                //         return Promise.resolve({user, type: 'signin'})
                //     } else {
                //         return Promise.resolve(null)
                //     }

                // }

            }
        }),

        Providers.Credentials({
            id: "profile",
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'profile',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                profile: { label: "profile", type: "object" },
                
            },

            authorize: async (credentials) => {
                // Add logic here to look up the user from the credentials supplied

                const user = JSON.parse(credentials.profile)

                if (user) {
                    return Promise.resolve({user, type: 'update-profile'})
                } else {
                    return Promise.resolve(null)
                }

            }
        }),
       
    ],
    callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {

            if (user) {
                // Add a new prop on token for user data
                token.data = user
            }
            
            return Promise.resolve(token)

        },
        session: async (session, token) => {
            // console.log('token.data.hostname: ', token.data.user);
            // console.log('token.data.type: ', token.data.type);
            session.user = token.data.user;
            session.hostname = token.data.user.hostname;
            return Promise.resolve(session)

        },
        redirect: async (url, baseUrl) => {
            console.log('url: ', url, baseUrl)
            return url.startsWith(baseUrl)
              ? Promise.resolve(url)
              : Promise.resolve(`${baseUrl}${url}`)
        }
    },

    events: {
        signIn: async (message) => { /*console.log(message, "SignIn is working")*/ },
        signOut: async (message) => { /* on signout */ },
        createUser: async (message) => { /* user created */ },
        linkAccount: async (message) => { /* account linked to a user */ },
        session: async (message) => {  },
        error: async (message) => { /* error in authentication flow */ }
    },

    session: {
          // Use JSON Web Tokens for session instead of database sessions.
          // This option can be used with or without a database for users/accounts.
          // Note: `jwt` is automatically set to `true` if no database is specified.
          jwt: true, 
          
          // Seconds - How long until an idle session expires and is no longer valid.
          maxAge: 6 * 60 * 60, // 30 days
          
          // Seconds - Throttle how frequently to write to database to extend a session.
          // Use it to limit write operations. Set to 0 to always update the database.
          // Note: This option is ignored if using JSON Web Tokens 
          updateAge: 60 * 60, // 24 hours
    },


    debug: false,
    secret: process.env.JWT_SECRET,
}

export default (req, res) => NextAuth(req, res, options)