import './footer.css'

function Footer() {

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <h2>Footer Content</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos inventore ab iusto totam unde impedit temporibus, aspernatur qui, nostrum itaque fugiat. Doloribus dolorem eligendi minima magni! Odio est quasi ipsa.</p>
                </div>
                <div className="footer-content">
                    <h2>Links</h2>
                    <ul>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2>Socials</h2>
                    <img src="/src/assets/facebook.png" />
                    <img src="/src/assets/instagram.png" />
                    {/* <img src="/src/assets/twitter.png" />   */}
                    <img src="/src/assets/whatsapp.png" />
                </div>

            </div>

        </footer>
    )

}

export default Footer