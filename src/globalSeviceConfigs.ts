export interface ServicePorts {
    http: number;
    https: number;
}



export class GlobalServiceConfigs {
    

    public getServicePorts(serviceName: string, env: string): ServicePorts {

    }
}
