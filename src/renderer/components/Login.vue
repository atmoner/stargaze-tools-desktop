<template>
 
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Wallets
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add wallet</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="walletName"                
                  outlined
                  label="Wallet name"
                  required
                  color="pink"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12" 
              >  
                <v-textarea
                  v-model="mnemonic"
                  outlined
                  name="input-7-4"
                  label="Your mnemonic" 
                  color="pink"
                  @input="onChange(mnemonic)"
                ></v-textarea>      
                {{ error }}
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="address"                
                  outlined
                  label="You address"
                  required
                  color="pink"
                ></v-text-field>
              </v-col>
 
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="pink"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="pink"
            text
            @click="saveAccount"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
 
</template>

<script>
import {
  SigningCosmWasmClient,
  DirectSecp256k1HdWallet,
  GasPrice,
} from 'cosmwasm';
const fs = require('fs');  
var bip39 = require('bip39');

  export default {
    name: 'Login',
    data: () => ({
      dialog: false,
      mnemonic: '', 
      address: '', 
      walletName: '',
      error: '',
       
    }),
    computed: {

    },    
    methods: {
      onChange: async function (mnemonic) {        
        //console.log(bip39.validateMnemonic('autumn bird success quiz umbrella roast brick island leave thunder middle pulse fame museum employ nature faculty maid inquiry strategy outside pattern uniform harvest'))   
        if (bip39.validateMnemonic(mnemonic)) {
          const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
            prefix: 'stars',
          });
          const [firstAccount] = await wallet.getAccounts();
          console.log(firstAccount)   
          this.address = firstAccount.address
          this.error = ''
        } else {
          this.address = ''
          this.error = 'Error: Bad mnemonic formats'
        }
      },
      saveAccount: async function () {        
        let student = { 
            name: this.walletName,
            mnemonic: this.mnemonic,
            account: this.address,          
        };
        
        let data = JSON.stringify(student, null, 2);
        // const unquoted = data.replace(/"([^"]+)":/g, '$1:');
        fs.writeFileSync('src/renderer/accounts/'+this.address+'.json', data);          
      }       
    }
  }
</script>
