<template lang="pug">
div(class="flex flex-row w-full")
    div(class="flex flex-col w-[45%] h-auto overflow-hidden  justify-between items-center")
        div(class="block h-[24rem] mt-12 lg:scale-125 md:h-[28rem] w-full rounded-xl ")
            img(class=" w-full object-contain rounded-xl h-full" src="/images/strawcart-model.jpg")
          
        div(class="flex flex-row w-full justify-around mb-4")
           
            div(class="flex flex-col")
                p Price
                p $890
            button(class="w-[9rem] h-[4rem] bg-[#00A3AD] rounded-xl text-white  text-xl") Add to Cart
    div(class="flex flex-col w-[55%] h-full bg-[#ffffff] justify-start items-start]  ")
        div(class="flex flex-row w-full justify-between items-center p-8")
            button(class="border-2 border-[#434447] bg-white rounded-lg w-[7rem] h-[2.5rem] flex items-center justify-around")
                BackIcon
                p Back
            CloseIcon
        h1(class=" text-xl px-4 ") Configure the StrawCart
        div(class="flex flex-row w-full items-center justify-start mt-8")
            ConfiguratorMainItem(@click="configuring = options.Wheel" class="" title="Wheel" icon="fluent-emoji-high-contrast:wheel")
            ConfiguratorMainItem(@click="configuring = options.SolarPanels" title="Solar Panels" icon="ic:outline-solar-power")
            ConfiguratorMainItem(@click="configuring = options.Battery" title="Battery" icon="material-symbols:battery-5-bar-sharp")
            ConfiguratorMainItem(@click="configuring = options.Motor" title="Motor" icon="mdi:motor")
        hr(class=" w-[94%] border-[0.8px] border-[#DADADA] mt-8 mb-8 mx-auto  ")
        h2(class="text-xl px-4 ") {{configuring.title}}
        div(class="flex flex-row w-full justify-start mt-8")
            ConfiguratorSecondaryItem(:icon="configuring.icon" :option="configuring.options[0]" )
            ConfiguratorSecondaryItem(:icon="configuring.icon" :option="configuring.options[1]")
            ConfiguratorSecondaryItem(:icon="configuring.icon" :option="configuring.options[2]")
            ConfiguratorSecondaryItem(:icon="configuring.icon" :option="configuring.options[3]")
        div(class="flex flex-row w-full h-[6rem] mt-9")
            div(class="border-2 text-white text-xl font-medium bg-[#8D8D8D] w-[55%] h-full] flex items-center justify-around")
                p From 890$

            button(class="border-2  text-xl font-medium  w-[45%] h-full flex items-center justify-around")
                p Next ->

</template>

<script setup lang="ts">
import CloseIcon from "~icons/ic/outline-close";
import BackIcon from "~icons/material-symbols/arrow-back";
import WheelIcon from "~icons/fluent-emoji-high-contrast/wheel";
import SolarIcon from "~icons/ic/outline-solar-power";
import BatteryIcon from "~icons/material-symbols/battery-5-bar-sharp";
import MotorIcon from "~icons/mdi/motor";

const options = {
  Wheel: {
    title: "Wheels",
    icon: "fluent-emoji-high-contrast:wheel",
    options: ["Wheel 1", "Wheel 2", "Wheel 3", "Wheel 4"],
  },
  SolarPanels: {
    title: "Solar Panels",
    icon: "ic:outline-solar-power",
    options: [
      "Solar Panel 1",
      "Solar Panel 2",
      "Solar Panel 3",
      "Solar Panel 4",
    ],
  },
  Battery: {
    title: "Batteries",
    icon: "material-symbols:battery-5-bar-sharp",
    options: ["Battery 1", "Battery 2", "Battery 3", "Battery 4"],
  },
  Motor: {
    title: "Motor",
    icon: "mdi:motor",
    options: ["Motor 1", "Motor 2", "Motor 3", "Motor 4"],
  },
};
const configuring = ref(options.Wheel);

const choosed = ref({
  Wheel: {
    title: "Wheels",
    price: 350,
  },
  SolarPanels: {
    title: "Solar Panels",
    price: 550,
  },
  Battery: {
    title: "Batteries",
    price: 250,
  },
  Motor: {
    title: "Motor",
    price: 450,
  },
});
const locale = useState<string>("locale.setting");
const { t } = useLang();
</script>

<style lang="sass"></style>
