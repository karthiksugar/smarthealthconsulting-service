import { Context } from 'aws-lambda';
import { MessageUtil } from '../utils/message';
import { ConsultingService } from '../service/consulting';

export class ConsultingController extends ConsultingService {
//   constructor (books: Model<any>) {
//     super(books);
//   }

    async testapi(){
        try{
            const result = await this.testAPI();
            return MessageUtil.success(result);
        } catch(err){
            console.error(err);
            return MessageUtil.error(err.code, err.message);       
        }
    }

    async login(event: any, context?: Context){
        console.log('functionName', context.functionName);
        var params: Object = JSON.parse(event.body);
        try{
            const result = await this.loginService(params);
            return MessageUtil.success(result);
        }catch(err){
            console.error(err);
            return MessageUtil.error(err.code, err.message);
        }
    }
  
}
