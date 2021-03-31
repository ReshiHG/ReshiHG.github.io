const   d = document,
        w = window;

export function responsiveMedia(id,mq,mobileContent,desktopContent){
    let breakpoint = w.matchMedia(mq);

    const responsive = e =>{
        // console.log(e.matches);
        if (e.matches) {
            d.querySelector(id).innerHTML = desktopContent;
        } else {
            d.querySelector(id).innerHTML = mobileContent;
        }
    };

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}
