'use strict';

const section6El = document.querySelector('.section6')
const workObserver = new IntersectionObserver((entries, observer) => {

    const [entry] = entries;
    // console.log(entry);

    if (!entry.isIntersecting) return;
    const myNum = document.querySelectorAll('.number');


    let speed = 400;

    myNum.forEach((myCount) => {
        // console.log(myCount.innerText);

        let target_count = +myCount.dataset.count;
        let init_count = +myCount.innerText;
        console.log(target_count);

        // let new_increment_num = Math.floor(target_count / speed);
        let new_increment_num = Math.ceil(target_count / speed);

        const updateNumber = () => {
            init_count += new_increment_num;
            myCount.innerText = init_count;
            if (init_count < target_count) {
                myCount.innerText = `${init_count + new_increment_num}`;
                setTimeout(() => { updateNumber() }, 5)
            }
        }
        updateNumber();
    });

    observer.unobserve(section6El)
},
    {
        root: null,
        threshold: 0.7,

    })

workObserver.observe(section6El)