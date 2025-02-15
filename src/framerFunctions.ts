import { Variants } from "framer-motion";
export const ltr = (delay:number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.75, delay: delay } },
});
export const rtl = (delay:number) => ({
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: delay } },
  });

export const up_down = (delay:number):Variants =>({
  initial: {
    y:-10
  },
  animate:{
    y:[10,-10],
    transition:{
      duration:.75,
      ease:'linear',
      repeat:Infinity,
      repeatType:'reverse',
      delay:delay
    }
  }
})