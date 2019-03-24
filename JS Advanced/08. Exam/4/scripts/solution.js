function solve() {

   let $kingdomInput = $('#kingdom > div > input[type="text"]:nth-child(1)');
   let $kingInput = $('#kingdom > div > input[type="text"]:nth-child(2)');
   let $rebuildBtn = $('#kingdom > div > button');
   const kingdoms = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX'];

   $rebuildBtn.on('click', () => {
      if (typeof $kingInput.val() === 'string' && $kingInput.val().length >= 2 &&
         kingdoms.includes($kingdomInput.val().toUpperCase())) {

         let kingName = $kingInput.val().toUpperCase();
         let kingdomName = $kingdomInput.val().toUpperCase();

         let kingdomElement = $(`#${kingdomName.toLowerCase()}`);
         kingdomElement.css('display', 'inline-block')
         let h1 = $('<h1>');
         h1.text(kingdomName);

         let divCastle = $('<div>');
         divCastle.addClass('castle');

         let h2 = $('<h2>');
         h2.text(kingName);

         let fieldset = $('<fieldset>');
         let legend = $('<legend>');
         legend.text('Army');
         let pTanks = $('<p>TANKS - 0</p>');
         let pFighters = $('<p>FIGHTERS - 0</p>');
         let pMages = $('<p>MAGES - 0</p>');
         let divArmy = $('<div>');
         divArmy.addClass('armyOutput');

         fieldset.append(legend);
         fieldset.append(pTanks);
         fieldset.append(pFighters);
         fieldset.append(pMages);
         fieldset.append(divArmy);

         kingdomElement.append(h1);
         kingdomElement.append(divCastle);
         kingdomElement.append(h2);
         kingdomElement.append(fieldset);
      }
      $kingInput.val('');
      $kingdomInput.val('');
   });

   let $fighterRadio = $('#characters > div:nth-child(1) > input[type="radio"]');
   let $mageRadio = $('#characters > div:nth-child(2) > input[type="radio"]');
   let $tankRadio = $('#characters > div:nth-child(3) > input[type="radio"]');
   let $joinBtn = $('#characters > div:nth-child(4) > button');

   let $characterNameInput = $('#characters > div:nth-child(4) > input[type="text"]:nth-child(1)');
   let $kingdomNameInput = $('#characters > div:nth-child(4) > input[type="text"]:nth-child(2)');

   $joinBtn.on('click', () => {

      if ($fighterRadio.is(':checked')) {
         let kingdomNameDiv = $(`#${$kingdomNameInput.val().toLowerCase()}`);

         if (typeof $characterNameInput.val() === 'string' && $characterNameInput.val().length >= 2 &&
            kingdoms.includes($kingdomNameInput.val().toUpperCase()) && kingdomNameDiv.is(':visible')) {

            let name = $characterNameInput.val();

            let armyOutput = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > div`);

            armyOutput.text(armyOutput.text() + name + ' ');

            let army = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > p:nth-child(3)`);

            let armyCount = Number(army.text().split(' - ')[1]);

            army.text(`FIGHTERS - ${armyCount + 1}`);
         }
      }
      if ($mageRadio.is(':checked')) {
         let kingdomNameDiv = $(`#${$kingdomNameInput.val().toLowerCase()}`);

         if (typeof $characterNameInput.val() === 'string' && $characterNameInput.val().length >= 2 &&
            kingdoms.includes($kingdomNameInput.val().toUpperCase()) && kingdomNameDiv.is(':visible')) {

            let name = $characterNameInput.val();

            let armyOutput = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > div`);

            armyOutput.text(armyOutput.text() + name + ' ');

            let army = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > p:nth-child(4)`);

            let armyCount = Number(army.text().split(' - ')[1]);

            army.text(`MAGES - ${armyCount + 1}`);
         }
      }
      if ($tankRadio.is(':checked')) {
         let kingdomNameDiv = $(`#${$kingdomNameInput.val().toLowerCase()}`);

         if (typeof $characterNameInput.val() === 'string' && $characterNameInput.val().length >= 2 &&
            kingdoms.includes($kingdomNameInput.val().toUpperCase()) && kingdomNameDiv.is(':visible')) {

            let name = $characterNameInput.val();

            let armyOutput = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > div`);

            armyOutput.text(armyOutput.text() + name + ' ');

            let army = $(`#${$kingdomNameInput.val().toLowerCase()} > fieldset > p:nth-child(2)`);

            let armyCount = Number(army.text().split(' - ')[1]);

            army.text(`TANKS - ${armyCount + 1}`);
         }
      }

      $characterNameInput.val('');
      $kingdomNameInput.val('');
   });

   const armyStats = {
      'MAGES': {
         'attack': 70,
         'defenses': 30
      },
      'FIGHTERS': {
         'attack': 50,
         'defenses': 50
      },
      'TANKS': {
         'attack': 20,
         'defenses': 80
      }
   };

   let $attackerInput = $('#actions > input[type="text"]:nth-child(2)');
   let $defenderInput = $('#actions > input[type="text"]:nth-child(3)');
   let $attackBtn = $('#actions > button');

   $attackBtn.on('click', () => {
      if (kingdoms.includes($attackerInput.val().toUpperCase()) && $(`#${$attackerInput.val().toLowerCase()}`).is(':visible') &&
         kingdoms.includes($defenderInput.val().toUpperCase()) && $(`#${$defenderInput.val().toLowerCase()}`).is(':visible')) {

            let attTanks = $(`#${$attackerInput.val().toLowerCase()} > fieldset > p:nth-child(2)`).text().split(' - ');
            let attFighters = $(`#${$attackerInput.val().toLowerCase()} > fieldset > p:nth-child(3)`).text().split(' - ');
            let attMages = $(`#${$attackerInput.val().toLowerCase()} > fieldset > p:nth-child(4)`).text().split(' - ');

            let attackerTanksCount = attTanks[1];
            let attackerFightersCount = attFighters[1];
            let attackerMagesCount = attMages[1];
            
            let attackerTanksDmg = armyStats[attTanks[0]].attack * attackerTanksCount;
            let attackerFightersDmg = armyStats[attFighters[0]].attack * attackerFightersCount;
            let attackerMagesDmg = armyStats[attMages[0]].attack * attackerMagesCount;

            let attackerDmg = attackerTanksDmg + attackerFightersDmg + attackerMagesDmg;


            let defTanks = $(`#${$defenderInput.val().toLowerCase()} > fieldset > p:nth-child(2)`).text().split(' - ');
            let defFighters = $(`#${$defenderInput.val().toLowerCase()} > fieldset > p:nth-child(3)`).text().split(' - ');
            let defMages = $(`#${$defenderInput.val().toLowerCase()} > fieldset > p:nth-child(4)`).text().split(' - ');

            let defenderTanksCount = defTanks[1];
            let defenderFightersCount = defFighters[1];
            let defenderMagesCount = defMages[1];
            
            let defenderTanksDef = armyStats[defTanks[0]].defenses * defenderTanksCount;
            let defenderFightersDef = armyStats[defFighters[0]].defenses * defenderFightersCount;
            let defenderMagesDef = armyStats[defMages[0]].defenses * defenderMagesCount;

            let defenderDef = defenderTanksDef + defenderFightersDef + defenderMagesDef;

            if (attackerDmg > defenderDef) {
               let attName = $(`#${$attackerInput.val().toLowerCase()} > h2`).text();
               
               $(`#${$defenderInput.val().toLowerCase()} > h2`).text(attName);
            }
      }

      $attackerInput.val('');
      $defenderInput.val('');
   });
}

solve();