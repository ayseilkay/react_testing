import { render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from "./index"
//it should be a valid email address

describe('Counter Tests',()=>{

      let increaseBtn,decreaseBtn,count;
    //her biri calısmadan önce sunları sunları yap demek istiyoruz.Kodu tekrardan kurtarmıs oluruz.
      beforeEach(()=>{
          console.log("Her testten önce çalışacağım ! ")
          render(<Counter/>);
          increaseBtn = screen.getByText("Increase");
          decreaseBtn = screen.getByText("Decrease");
          count = screen.getByText("0")
      })

      // tüm testlerden önce bir kere çalışır ve bir daha çalışmaz.
      beforeAll(()=>{
          console.log("Bir kere çalışacagım !")
      })

      //after all herseyden sonra çalışır.
      afterAll(()=>{
          console.log("En son bir kere çalışacağım.")
      })

      //her testen sonra çalışır.
      afterEach(()=>{
          console.log("Her testten sonra çalışacağım")
      })
    it('increase btn',()=>{
       
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })
    
    test('decrease btn',()=>{
        
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})

