if(!email || email.length < 1) return ('noEmail')
        if(!password || password.length < 1) return ('noPassword')
        if(!confirmPassword || confirmPassword.length < 1) return ('noConfirmPassword')
    
        if(!validator.isEmail(email)) return setAlert('formatEmail')
        if(password.length < 8) return ('shortPassword')
        if(confirmPassword.length < 8) return ('shortConfirmPassword')
    
        if(password !== confirmPassword) return setAlert("missmatchPassword")
        setCreating(true)

        const ALERT = {
            noEmail: {
                title: 'Missing email'
            } ,
            noPassword = {
                title: 'Missing password'
            },
            noConfirmPassword = {
                title: 'Missing confirm password'
            },
            formatEmail = {
                title: 'Invald email'
            },
            shortPassword = {
                title: 'Password too short'
            },
            shortConfirmPassword = {
                title: 'confirm password too short'
            },
            missmatchPassword = {
                title: 'confirm password does not match'
            },
            creating = {
                title: 'Creating account'
            }

        }