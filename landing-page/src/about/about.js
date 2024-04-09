import React from 'react';
import './about.css'; 

const About = () => {
  return (
    <section id="about">
        <div class="container">
            <div class="about-item">
                <div class="mission-d">
                    <h2>Our Mission</h2>
                    <p class="mision-p">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit integer, quisque
                        nostra vel duis tristique metus montes maecenas curabitur, euismod eget
                        torquent phasellus nisi congue fringilla. Cum nibh nunc pulvinar felis
                        elementum sodales venenatis auctor sagittis eu non, hendrerit pretium
                        taciti dis ridiculus dignissim donec justo fringilla bibendum.
                        Eleifend congue mattis dui senectus.
                    </p>
                </div>
                <img src="../assets/450.jpg" alt="Mision imagen" class="misionImg" />
            </div>
                <div>
                    <h2>Our Story</h2>
                    <div class="about-item">
                        <img src="../assets/450.jpg" alt="Story imagen" />
                        <p class="story-p">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit integer, quisque
                            nostra vel duis tristique metus montes maecenas curabitur, euismod eget
                            torquent phasellus nisi congue fringilla. Cum nibh nunc pulvinar felis
                            elementum sodales venenatis auctor sagittis eu non, hendrerit pretium
                            taciti dis ridiculus dignissim donec justo fringilla bibendum.
                            Eleifend congue mattis dui senectus.
                        </p>
                    </div>
                </div>
        </div>
    </section>
  );
};

export default About;