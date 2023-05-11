import * as vitest from 'vitest';
import creations from "@/views/Creations.vue";
import Entete from "@/components/Entete.vue";
import BasDePage from "@/components/BasDePage.vue";
import {mount } from "@vue/test-utils";
const axios = require('axios');
import cy from 'cypress';
import cypress from "cypress";

vitest.describe('creations', () => {
  let wrapper;
  vitest.beforeEach(() => {
    wrapper = mount(creations);
  });

  vitest.it('Le composant entete est chargé correctement',  () => {
    const entete = wrapper.findComponent(Entete)
    vitest.expect(entete.exists()).toBe(true);
  });

  vitest.it('Le composant BasdePage est chargé correctement',  () => {
    const basdepage = wrapper.findComponent(BasDePage)
    vitest.expect(basdepage.exists()).toBe(true);
  })

  vitest.it('Devrait retourner une liste de collections', async () => {
    const response = await axios.get('http://localhost:3000/collections');
    const collections = response.data;
    vitest.expect(collections).toBeDefined();
    vitest.expect(collections.length).toBeGreaterThan(0);
  });

  vitest.it('Devrait retourner des collections avec un nom et une description comme propriétés', async () => {
    const response = await axios.get('http://localhost:3000/collections');
    const collections = response.data;
    const firstCollection = collections[0];
    vitest.expect(firstCollection).toHaveProperty('nom');
    vitest.expect(firstCollection).toHaveProperty('description');
  });

  vitest.it('devrait chargés les modèles', async () => {
    const response = await axios.get('http://localhost:3000/prod');
    const mod = response.data;
    vitest.expect(mod).toBeDefined();
    vitest.expect(mod.length).toBeGreaterThan(0);
  });

  vitest.it('Les modèles devraient avoir certaines propriétés', async () => {
    const response = await axios.get('http://localhost:3000/prod');
    const mod = response.data;
    const firstMod = mod[0];
    vitest.expect(firstMod).toHaveProperty('nom');
    vitest.expect(firstMod).toHaveProperty('photo1');
    vitest.expect(firstMod).toHaveProperty('photo2');
    vitest.expect(firstMod).toHaveProperty('photo3');
    vitest.expect(firstMod).toHaveProperty('photo4');
    vitest.expect(firstMod).toHaveProperty('categ');
    vitest.expect(firstMod).toHaveProperty('collection');
    vitest.expect(firstMod).toHaveProperty('description');
    vitest.expect(firstMod).toHaveProperty('prix');
  });

  vitest.it('Charger le nom de la collection quand on clique sur le bouton', async () => {
    const bouton = wrapper.find('v-btn')
    await bouton.trigger('click');
   vitest.expect(wrapper.vm.ThisCollection).toBe("une collection d'essai")


  });

  vitest.it('l avatar rend bien la première image', () => {
    wrapper.propsData ={
        src: 'model1.jpeg',
        size: 200,
        rounded: false
      }

    vitest.expect(wrapper.find('v-avatar img').attributes('src')).toBe('model1.jpeg')
  })

  vitest.it('l avatar rend bien la 2e image', () => {
    wrapper.propsData = {
      src: 'model2.jpeg',
      size: 200,
      rounded: false
    }
    vitest.expect(wrapper.find('avatar2').attributes('src')).toBe('model2.jpeg')
  })

  // Tests end-to-end


} )