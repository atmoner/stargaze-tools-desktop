<template>
        <v-row>
          <Menu />
          <v-col            cols="12"
            sm="10">
          <v-sheet outlined color="grey" rounded>
              <v-card min-height="70vh"  outlined elevation="0" color="black" class="white--text"> 
              <v-card-text>
                <v-stepper alt-labels v-model="e6">
                  <v-stepper-header>
                    <v-stepper-step 
                      :complete="e6 > 1"
                      step="1"
                      color="pink"
                      @click="e6 = 1"        
                    >
                      Basic information
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                      :complete="e6 > 2"
                      step="2"
                      color="pink"
                      @click="e6 = 2"      
                    >
                      Description
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step 
                      :complete="e6 > 3"
                      step="3"
                      color="pink"
                      @click="e6 = 3"        
                    >
                      Price + Royalty
                    </v-stepper-step>
                    
                    <v-divider></v-divider>        
                    
                    <v-stepper-step :complete="e6 > 4" step="4" @click="e6 = 4" color="pink">
                      Ipfs + Json
                    </v-stepper-step>     
        
                  </v-stepper-header>     
              
                </v-stepper>
              
              
              
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >              
                <v-stepper
                  v-model="e6" 
                >
                  <v-stepper-content step="1">
                  
                    <v-row >
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-card
                          class="pa-2"
                          outlined
                          tile
                          color="black"
                        >
                          <v-text-field
                            v-model="name"
                            label="Collection name"
                            required
                            outlined
                            dense
                            color="pink"
                            class="pa-md-4 mx-lg-auto"
                          ></v-text-field>
                        </v-card>
                      </v-col>
                      <v-col
                        cols="6"
                        md="6"
                      >
                        <v-card
                          class="pa-2"
                          outlined
                          tile
                          color="black"
                        >
                          <v-text-field
                            v-model="symbol"
                            label="Collection symbol"
                            required
                            outlined
                            dense
                            class="pa-md-4 mx-lg-auto"
                            color="pink"
                          ></v-text-field>  
                        </v-card>
                      </v-col>
              
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-card
                          class="pa-2"
                          outlined
                          tile
                          color="black"
                        >
                          <v-text-field
                            v-model="numTokens"
                            label="Number of tokens"
                            required
                            outlined
                            dense
                            color="pink"
                            class="pa-md-4 mx-lg-auto"
                          ></v-text-field>
                        </v-card>
                      </v-col>
                      <v-col
                        cols="6"
                        md="6"
                      >
                        <v-card
                          class="pa-2"
                          outlined
                          tile
                          color="black"
                        >
                          <v-text-field
                            v-model="perAddressLimit"
                            label="Per address limit"
                            required
                            outlined
                            dense
                            class="pa-md-4 mx-lg-auto"
                            color="pink"
                          ></v-text-field>  
                        </v-card>
                      </v-col>
                    </v-row>    

                    <v-btn
                      color="pink"
                      @click="e6 = 2"
                      class="ml-6"
                    >
                      Continue
                    </v-btn>
                  </v-stepper-content>
              

                  <v-stepper-content step="2">
                    <v-textarea
                      v-model="description"
                      outlined
                      name="input-7-4"
                      label="Collection description"
                      value=""
                      color="pink"
                      class="pa-md-4 mx-lg-auto"
                    ></v-textarea>
                    <v-text-field
                      v-model="image"
                      label="Image"
                      required
                      outlined
                      dense
                      class="pa-md-4 mx-lg-auto"
                      color="pink"
                    ></v-text-field>       
                    <v-btn
                      @click="e6 = 3"
                      color="pink"
                      class="ml-6"
                    >
                      Continue
                    </v-btn>
                  </v-stepper-content>
              

                  <v-stepper-content step="3">
              
                  <v-row >
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                        color="black"
                      >
                        <span
                          class="text-h5 font-weight-light pa-md-4 mx-lg-auto"
                          v-text="sliderPrice + ' Stars / NFT'"
                  
                        ></span>
                        <v-slider
                          v-model="sliderPrice"
                          class="align-center pa-md-4 mx-lg-auto"
                          :max="maxPrice"
                          :min="minPrice"
                          color="pink"
                          hide-details
                  
                        > 
                        </v-slider>  
                  
                        <br />
                        <v-text-field
                          v-model="addressPayRoy" 
                          label="Payment Address"
                          required
                          outlined
                          dense
                          class="pa-md-4 mx-lg-auto"
                          color="pink"
                        ></v-text-field> 
                      </v-card>
                    </v-col>
                    <v-col
                      cols="6"
                      md="6"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                        color="black"
                      >
                        <span
                          class="text-h5 font-weight-light pa-md-4 mx-lg-auto"
                          v-text="sliderRoyalty + '% royalty'"
                  
                        ></span>
                        <v-slider
                          v-model="sliderRoyalty"
                          class="align-center pa-md-4 mx-lg-auto"
                          :max="maxRoyalty"
                          :min="minRoyalty"
                          color="pink"
                          hide-details
                  
                        > 
                        </v-slider>  
                        <br />
                        <v-text-field
                          v-model="addressPayRoy" 
                          label="Royalty Address"
                          required
                          outlined
                          dense
                          class="pa-md-4 mx-lg-auto"
                          color="pink"
                        ></v-text-field> 
                      </v-card>
                    </v-col>
                  </v-row>
                    
                    <v-btn
                      @click="e6 = 4"
                      color="pink"
                      class="ml-6"
                    >
                      Continue
                    </v-btn>
                  </v-stepper-content>
              
                  <v-stepper-content step="4" >
                  <v-row >
                    <v-text-field
                      v-model="metadata"
                      label="Ipfs metadata"
                      required
                      outlined
  
                      class="pa-md-4 mx-lg-auto"
                      color="pink"
                    ></v-text-field> 
                    </v-row >
                    <v-row >
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-dialog
                          ref="dialog1"
                          v-model="modal"
                          :return-value.sync="date"
                          persistent
                          width="290px"
                          color="pink"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Start date"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="pink"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            scrollable
                            color="pink"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="pink"
                              @click="modal = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="pink"
                              @click="$refs.dialog1.save(date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <v-col
                        cols="6"
                        md="6"
                      >
                        <v-dialog
                          ref="dialog"
                          v-model="modal2"
                          :return-value.sync="time"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="time"
                              label="Start hour"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="pink"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="modal2"
                            v-model="time"
                            full-width
                            color="pink"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="pink"
                              @click="modal2 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="pink"
                              @click="$refs.dialog.save(time)"
                            >
                              OK
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
              
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-select
                          :items="wallets"
                          item-text="name"
                          item-value="file"                          
                          label="Select wallet"
                          outlined
                          color="pink"
                          return-object
                          @change="changeRouteWallet"
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="6"
                        md="6"
                      >
 
                        <v-select
                          :items="network"
                          item-text="name"
                          item-value="url"                               
                          label="Select network"
                          outlined
                          color="pink"
                          return-object
                          @change="changeRouteNetwork"
                        ></v-select>
 
                      </v-col>
                    </v-row> 
 
                    <v-btn                      
                      @click="validate"
                      color="pink"
                    >
                      Generate config
                    </v-btn>
                    <span v-if="msgConfigCreate" color="green">Config Created!</span>
                  </v-stepper-content>
              
   
                </v-stepper>   
                </v-form>
 
              </v-card-text>
             </v-card>
            </v-sheet>
            
          </v-col>
        </v-row>
</template>

<script>
const fs = require('fs'); 
import Menu from '~/components/Menu.vue';

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

export default {
  name: 'IndexPage',
  components: {
    Menu
  }, 
  data () {
    return {
      links: [
        'Configuration', 
        'White list', 
        'Instanciate', 
        'Mint',  
      ],
      externalContent: '',
      valid: true,
      name: 'Colelction 1',
      symbol: 'CLO',
      image: 'https://stargaze.mypinata.cloud/ipfs/bafybeia45l2eflxa4xx7ii6mhekyhh5xnucudj5tzp2upzcoeqfl4uzdr4/images/1.png',  
      description: 'Description of collection blablabla',
      addressPayRoy: 'stars13jawsn574rf3f0u5rhu7e8n6sayx5gkwxsh7aj',
      numTokens: '420',
      perAddressLimit: '42',
      metadata: 'ipfs://bafybeicikkr6eosuhpwulk6bpcmh5s7o4gysh3aowoyw2zatw4duwb5bm4/metadata',
      e6: 1,
      min: 50,
      max: 50000,
      minPrice: 1,
      maxPrice: 50000,
      slider: 40,  
      sliderPrice: 1,
      minRoyalty: 0,
      maxRoyalty: 100,
      sliderRoyalty: 10,   
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,      
      time: null,
      menu2: false,
      modal2: false,    
      network: [  
        {name: 'Testnet', url: 'https://rpc.double-double-1.stargaze-apis.com/'}, 
        {name: 'Mainnet', url: 'https://rpc.stargaze-apis.com/'}
      ],
      wallets: [],
      selectedNetwork: '',
      selectedWalletMn: '',
      selectedWalletAddr: '',
      msgConfigCreate: false,
    }
  },
    mounted() {
      this.msgConfigCreate = false
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
        var data = [];
        readFiles('src/renderer/accounts/', function(filename, content) {
          //console.log(content)
          //data[filename] = content;
          const obj = JSON.parse(content);
          data.push({name: obj.name, file: filename});
        }, function(err) {
          throw err;
        });  
        console.log(data)
        this.wallets = data
        
    },  
    methods: {
      validate () {
        console.log(this.network)
        console.log(this.$refs.form.validate())        
            /* // TODO whitelist
            whitelist: '',
            whitelistStartTime: '',
            whitelistEndTime: '',
            whitelistPrice: '',
            whitelistPerAddressLimit: '',
            whitelistMemberLimit: '',
            whitelistContract: '',   */     
        let student = { 
            mnemonic: this.selectedWalletMn,
            account: this.selectedWalletAddr, 
            rpcEndpoint: this.selectedNetwork,
            name: this.name,
            symbol: this.symbol,
            description: this.description,
            image: this.image,
            // Royalty
            royaltyPaymentAddress: this.addressPayRoy,
            royaltyShare: this.sliderRoyalty/100,
            // Minter
            baseTokenUri: this.metadata,
            numTokens: this.numTokens,
            unitPrice: this.sliderPrice,
            perAddressLimit: this.perAddressLimit,
            startTime: this.date + 'T' + this.time + ':00.000Z',
            minter: '',
            sg721: '',
            sg721CodeId: 1,
            minterCodeId: 2,
            whitelistCodeId: 3,            
        };
        
        let data = JSON.stringify(student, null, 2);
        //const unquoted = data.replace(/"([^"]+)":/g, '$1:');
        //fs.writeFileSync('config.js', 'module.exports = ' + unquoted);    
        fs.writeFileSync('src/renderer/config.json', data); 
        this.msgConfigCreate = true
        
      },
      toggle_dark_mode: function() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      },
      changeRouteNetwork(a) {
        this.selectedNetwork = a.url
      },    
      changeRouteWallet(a) {
        this.selectedWallet = a.file
        let rawdata = fs.readFileSync('src/renderer/accounts/' + a.file);
        let walletData = JSON.parse(rawdata);
        this.selectedWalletMn = walletData.mnemonic
        this.selectedWalletAddr = walletData.account
      },    
    }, 
}
</script>
<style>
 
.theme--dark.v-stepper {
  background: black;
}
</style>
 
