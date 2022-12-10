<template lang="pug">
div#order(class="w-4/5 p-3 ")
    div#order-title(class='flex flex-row')
    div#order-names(class='flex flex-row justify-between h-12   ')
        div(class='w-[49.5%]')
            p(class="text-black text-lg mb-2 font-adelia ") Imię
            input#customer-name(v-model="customerName" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2 ")
        div(class='w-[49.5%]')
            p(class="text-black text-lg mb-2 font-adelia") Nazwisko
            input#customer-surname(v-model="customerSurname" class="w-full h-full border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-email(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                div(class='flex space-x-1')
                    p(class="text-black text-lg mb-2 font-adelia") Email 
                    p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="emailError === true && customerEmail.length >0" class="text-red-600") Niepoprawny email
                p(v-if="emailError === false" class="text-green-600") Poprawny email
            input#customer-email(@input="validateEmail" v-model="customerEmail" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-mobile(class='flex flex-row h-12 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                p(class="text-black text-lg mb-2 font-adelia") Numer telefonu
                p(v-if="phoneError === true && customerPhone.length >0" class="text-red-600") Niepoprawny numer telefony
                p(v-if="phoneError === false" class="text-green-600") Poprawny numer
            input#customer-phone(@input="validatePhone" v-model="customerPhone" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2")
    div#order-letter(class='flex flex-row h-28 mt-12')
        div(class='w-full')
            div(class="flex justify-between w-full")
                div(class='flex space-x-1')
                    p(class="text-black text-lg mb-2 font-adelia") Wiadomość 
                    p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="messageError === true && message.length >0" class="text-red-600") Pusta wiadomosc
                p(v-if="messageError === false" class="text-green-600") Poprawnie
            
            textarea#message(@input="updateMessage($event.target.value)" class="w-full h-full  border-[#DADADA] border-[2px] rounded-md p-2 ")
    div#order-policy(class='flex flex-col  mt-12')
        div(class='flex space-x-1')
                p(class="text-black text-lg mb-2 font-adelia") Polityka prywatności 
                p(class="text-yellow-400 text-lg mb-2 font-adelia") *
                p(v-if="!isPolicyAccepted" class="text-red-600") Zaaakceptuj polityke prywatności
                p(v-else class="text-green-600") Zaakceptowano
        
        div(class="flex flex-row justify-start items-center  ")
            input(v-model="isPolicyAccepted" type="checkbox" class="" )
            p(class="text-black text-lg font-adelia ml-2") Zaznaczając akceptujesz warunki polityki prywatności.
    div#order-send(class='flex flex-row mt-12')

   
    <SmartButton text="Wyślij"/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";

const message = ref("");
const customerEmail = ref("");
const customerName = ref("");
const customerSurname = ref("");
const customerPhone = ref("");

const emailError: Ref<boolean | null> = ref(null);
const phoneError: Ref<boolean | null> = ref(null);
const messageError: Ref<boolean | null> = ref(null);
const isPolicyAccepted: Ref<boolean | null> = ref(null);

onMounted(() => {});
const updateMessage = (text: any) => {
  validateMessage();
  message.value = text;
};
const validatePhone = () => {
  const phoneValue = customerPhone.value;
  const phoneRegex = new RegExp(
    /^(\+48|0048|48)? ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/
  );
  if (phoneRegex.test(phoneValue)) {
    phoneError.value = false;
    return true;
  } else {
    phoneError.value = true;
    return false;
  }
};

const validateEmail = () => {
  const emailValue = customerEmail.value;
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (emailRegex.test(emailValue)) {
    emailError.value = false;
    return true;
  } else {
    emailError.value = true;
    return false;
  }
};

const validateMessage = () => {
  const messageValue = message.value;
  if (messageValue.length > 5) {
    messageError.value = false;
    return true;
  } else {
    messageError.value = true;
    return false;
  }
};
const sendEmail = () => {
  validatePhone();
  if (validateEmail() && validateMessage()) {
    var link =
      "mailto:papadi166@gmail.com" +
      `?cc=${customerEmail.value}` +
      "&subject=" +
      encodeURIComponent(
        `Zapytanie - ${customerName.value} ${customerSurname.value}`
      ) +
      "&body=" +
      encodeURIComponent(message.value);
    window.location.href = link;
  }
};
</script>

<style lang="sass"></style>
