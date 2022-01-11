import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from '.'

describe("Todo Testleri",()=>{
    let addBtn,txtField;
    beforeEach(()=>{
        console.log("Her testten önce çalışacagım")
        render(<Todo/>);
        addBtn = screen.getByText("Add");
        txtField = screen.getByLabelText("Text");

    })

    test("Varsayılan olarak verilen 3 nesne render edilmeli",()=>{
        const items = screen.getAllByText(/Item/i);//Item içeriyor mu diye bakıyor.
        expect(items.length).toEqual(3);// dizideki default eleman sayısı gercekten 3 mü diye bakıyor.
    })
    test("İnput ve buton dökümanda bulunmalı",()=>{
        expect(addBtn).toBeInTheDocument();
        expect(txtField).toBeInTheDocument();
    })

    test("inputa string girilip butona basılınca listeye eklenmeli",()=>{
         // inputu doldurduk.
        const name="Ayse İlkay"
        userEvent.type(txtField,name); 
        // butona tıkladık
        userEvent.click(addBtn);
        //assertion kısmı (kontrol kısmı): birsey olmasını bekliycez
        expect(screen.getByText(name)).toBeInTheDocument(); //bu eklenilen yeni string dökümanda olmalı diyoruz.
    })
})