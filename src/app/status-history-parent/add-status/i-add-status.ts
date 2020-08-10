import { IService } from 'src/app/service/i-service';

export interface IAddStatus{
    service: IService;
    setService(service: IService);
}

export interface IGridHistory{
    service: IService;
    setService(service: IService);
}