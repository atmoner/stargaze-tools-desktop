<template>
  <v-row>
    <Menu />
    <v-col>
      <v-sheet outlined color="grey" rounded>
        <v-card min-height="70vh"  outlined elevation="0" color="black" class="white--text">
          <v-card-text>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step
                  :complete="e1 > 1"
                  step="1"
                  color="pink"
                  >
                  Address
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                  :complete="e1 > 2"
                  step="2"
                  color="pink"
                  >
                  Configuration
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" color="pink">
                  Instantiate WL
                </v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card
                    class="mb-12"
                    color="black lighten-1"
                    height="200px"
                    >
                      <v-textarea
                        v-model="addressList"
                        outlined
                        no-resize
                        name="input-7-4"
                        label="White list address (One by line)"
                        value=""
                        class="pa-md-4 mx-lg-auto"
                        color="pink"
                        rows="6" 
                        return-object
 
                      ></v-textarea>
                  </v-card>
                  <v-btn
                    color="pink"
                    @click="checkAddress"
                    >
                    Continue
                  </v-btn>
                  <v-btn text>
                    Cancel
                  </v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-row >
                    <v-text-field
                      v-model="whitelistPrice"
                      label="whitelist Price"
                      required
                      outlined
  
                      class="pa-md-4 mx-lg-auto"
                      color="pink"
                    ></v-text-field> 
                    <v-text-field
                      v-model="whitelistPerAddressLimit"
                      label="Whitelist Per Address Limit"
                      required
                      outlined
  
                      class="pa-md-4 mx-lg-auto"
                      color="pink"
                    ></v-text-field>     
                    <v-text-field
                      v-model="whitelistMemberLimit"
                      label="Whitelist Member Limit"
                      required
                      outlined
  
                      class="pa-md-4 mx-lg-auto"
                      color="pink"
                    ></v-text-field>                     
                    </v-row >
                    <!-- Start date -->
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
                      <!-- Start hour -->
                      <v-col
                        cols="6"
                        md="6"
                      >
                        <v-dialog
                          ref="dialog2"
                          v-model="modal2"
                          :return-value.sync="time"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="startTime"
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
                            v-model="startTime"
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
                              @click="$refs.dialog2.save(startTime)"
                            >
                              OK
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
                      <!-- End date -->
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-dialog
                          ref="dialog3"
                          v-model="modal3"
                          :return-value.sync="dateEnd"
                          persistent
                          width="290px"
                          color="pink"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="dateEnd"
                              label="End date"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="pink"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="dateEnd"
                            scrollable
                            color="pink"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="pink"
                              @click="modal3 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="pink"
                              @click="$refs.dialog3.save(dateEnd)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <!-- End hour -->
                      <v-col
                        cols="6"
                        md="6"
                      >
                        <v-dialog
                          ref="dialog4"
                          v-model="modal4"
                          :return-value.sync="time"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="endTime"
                              label="End hour"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="pink"
                              outlined
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="modal4"
                            v-model="endTime"
                            full-width
                            color="pink"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="pink"
                              @click="modal4 = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="pink"
                              @click="$refs.dialog4.save(endTime)"
                            >
                              OK
                            </v-btn>
                          </v-time-picker>
                        </v-dialog>
                      </v-col>
                    </v-row> 
                  <v-btn
                    color="pink"
                    @click="addConfig"
                    >
                    Continue
                  </v-btn>
                  <v-btn text>
                    Cancel
                  </v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                   
                  <v-row >
                    <v-col
                      cols="12"
                      md="12"
                    >     
                      <v-simple-table  color="black">
                        <template v-slot:default>
 
                          <tbody>
                            <tr>
                              <td>whitelistStartTime</td>
                              <td>{{ finalData.whitelistStartTime }}</td>
                            </tr>
                            <tr>
                              <td>whitelistEndTime</td>
                              <td>{{ finalData.whitelistEndTime }}</td>
                            </tr>                            
                            <tr>
                              <td>whitelistPrice</td>
                              <td>{{ finalData.whitelistPrice }}</td>
                            </tr>  
                            <tr>
                              <td>whitelistPerAddressLimit</td>
                              <td>{{ finalData.whitelistPerAddressLimit }}</td>
                            </tr>                                                          
                            <tr>
                              <td>whitelistMemberLimit</td>
                              <td>{{ finalData.whitelistMemberLimit }}</td>
                            </tr>                             
                          </tbody>
                        </template>
                      </v-simple-table>                                   
                      
                    </v-col>               
                  </v-row >     
                  <br />              
                  <v-btn
                    color="pink"
                    @click="instansiateWl"
                    >
                    Continue
                  </v-btn>
 
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
//import { InstantiateMsg } from '@stargazezone/types/contracts/whitelist/instantiate_msg';
//import Timestamp from '@stargazezone/types/contracts/minter/shared-types';
//import { coins } from 'cosmwasm';
import {
  SigningCosmWasmClient,
  DirectSecp256k1HdWallet,
  GasPrice,
  coins,
} from 'cosmwasm';
const fs = require('fs'); 
import Menu from '~/components/Menu.vue';

export default {
  name: 'WhiteListPage',
  components: {
    Menu
  },   
  data () {
    return {
      e1: 1,
      addressList: 'stars15zj829htn7uzqyaaktxc0z6ew7rkw6frvs77g4 \nstars15zj829htn7uzqyaaktxc0z6ew7rkw6frvs77g4',
      arrayList: '',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateEnd: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      startTime: '05:00',
      endTime: '07:00',
      whitelistPrice: '420',
      whitelistPerAddressLimit: '420',
      whitelistMemberLimit: '420',
      menu: false,
      modal: false,      
      time: null,
      menu2: false,
      modal2: false, 
      modal3: false, 
      modal4: false, 
      finalData: [],
    }
  },
  methods: {
    checkAddress(a) {        
      var arrayOfLines = this.addressList.split("\n"); 
      this.arrayList = arrayOfLines
      console.log(this.arrayList); 
      this.e1 = 2            
    },   
    addConfig() {        
      console.log(this.startTime)  
      let rawdata = fs.readFileSync('src/renderer/config.json');
      let student = JSON.parse(rawdata);
      student.whitelist = this.arrayList
      student.whitelistStartTime = this.date + 'T' + this.startTime + ':00.000Z',
      student.whitelistEndTime = this.dateEnd + 'T' + this.endTime + ':00.000Z',
      student.whitelistPrice = this.whitelistPrice
      student.whitelistPerAddressLimit = this.whitelistPerAddressLimit
      student.whitelistMemberLimit = this.whitelistMemberLimit

      let data = JSON.stringify(student, null, 2);
      fs.writeFileSync('src/renderer/config.json', data); 
      this.e1 = 3       
      this.finalData = student
    },     
    // TODO All this part not work :/
    async instansiateWl() {        
      
      var whitelistStartTime = (
        new Date(this.finalData.whitelistStartTime).getTime() * 1_000_000
      ).toString();

      var whitelistEndTime = (
        new Date(this.finalData.whitelistEndTime).getTime() * 1_000_000
      ).toString();   
      
      
      const msg = {
        members: this.finalData.whitelist,
        start_time: whitelistStartTime,
        end_time: whitelistEndTime,
        unit_price: {
          amount: (this.finalData.whitelistPrice * 1000000).toString(),
          denom: 'ustars',
        },
        per_address_limit: this.finalData.whitelistPerAddressLimit,
        member_limit: this.finalData.whitelistMemberLimit,
      };
      const gasPrice = GasPrice.fromString('0ustars');
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.finalData.mnemonic, {
        prefix: 'stars',
      });

      const client = await SigningCosmWasmClient.connectWithSigner(
        this.finalData.rpcEndpoint,
        wallet,
        { gasPrice }
      );      
      const WHITELIST_CREATION_FEE = coins('100000000', 'ustars');
      console.log(msg)
      

      /*const result = await client.instantiate(
        this.finalData.account,
        this.finalData.whitelistCodeId,
        msg,
        'whitelist',
        'auto',
        { funds: WHITELIST_CREATION_FEE, admin: this.finalData.account }
      );
      console.log(result)
      const wasmEvent = result.logs[0].events.find((e) => e.type === 'wasm');
      console.info(
        'The `wasm` event emitted by the contract execution:',
        wasmEvent
      );  */   
    },     
  }, 
}
</script>
<style> 
.theme--dark.v-stepper {
  background: black;
}
</style>
 
 
