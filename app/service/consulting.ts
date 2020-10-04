//import { Model } from 'mongoose';
//import { CreateBookDTO } from '../model/dto/createBookDTO';
import AWS from "aws-sdk";

AWS.config.update({ region: 'us-east-1' });


export class ConsultingService {
//   private books: Model<any>;
//   constructor(books: Model<any>) {
//     this.books = books;
//   }

    protected testAPI(){
        var result = {data: 'API is working properly'}
        return result;
    }

    protected async loginService(obj: Object): Promise<object>{
        try{

            var SNS = new AWS.SNS({ apiVersion: '2010-03-31'});
            const mobileNumber = obj['mobileNumber'];
            
            console.log('Mobile Number = '+mobileNumber);

            const min = 100000;
            const max = 999999;

            var OTP = Math.floor(Math.random() * (max-min) + min);
            console.log('OTP = '+OTP);

            const message = OTP + ' is your SECRET OTP (One Time Password) to '
            + 'authenticate your login to smart health consulting. Do not share it with anyone';

            const messageParams = {
                Message: message,
                PhoneNumber: '+91' + mobileNumber,
                MessageAttributes: {
                    'AWS.SNS.SMS.SMSType': {
                        'DataType': 'String',
                        'StringValue': 'Transactional'
                    }
                }
            };
            var result = await SNS.publish(messageParams).promise();
            result['OTP'] = JSON.stringify(OTP);

            return result;

        }catch(err){
            console.error(err);
            throw err;
        }
    }
}
