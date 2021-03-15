import React from 'react';
import '../css/Toasts.scss'
import gsap from "gsap";

const Button = ({color, text}) => {
    return (
        <div>
            <button className={`button-${color}`} onClick={e => {
                const toastsContainer = document.querySelector('.toasts-container');
                const toastEl = document.createElement('div');
                toastEl.classList.add(`toast-${color}`);
                const toastWrap = document.createElement('div');
                toastWrap.classList.add(`toast-${color}__wrap`);
                toastWrap.innerHTML = text;          
                toastEl.appendChild(toastWrap);
                toastsContainer.appendChild(toastEl);
                        
                const tl = gsap.timeline();

                tl.to(toastEl, {
                    autoAlpha: 1,
                    y: 0,
                    ease: 'power4.out',
                    duration: .7,
                });

                tl.to(toastEl, {
                    height: 0,
                    marginBottom: 0,
                    autoAlpha: 0,
                    duration: .9,
                    delay: 3,
                    ease: 'power4.out',
                    onComplete: () => {
                        toastEl.parentNode.removeChild(toastEl);
                    }
                });
            }}>
                {text}
            </button>           
        </div>
    )
}

const Toasts = () => {
    return (
       <>
        <div class="toasts-container"></div>
        <section className="toasts">
            <div className="toast_container">
                <Button color="green" text="Show success" />
                <Button color="blue" text="Show info" />
                <Button color="red" text="Show error" />       
            </div>
        </section>
       </>
    );
}

export default Toasts;
