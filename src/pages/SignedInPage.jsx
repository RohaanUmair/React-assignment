function SignedInPage() {
    return (
        <div style={{borderTop: '1px solid #d9d9d9', height: '50dvh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <h1 style={{fontSize: 40}}>You are Signed In.</h1>
                <button style={{backgroundColor: '#b88e2f', color: 'white', border: 'none', width: 200, height: 50, fontFamily: 'Poppins', fontSize: 19, marginTop: 15}}>Sign Out</button>
            </div>
        </div>
    )
}

export default SignedInPage;