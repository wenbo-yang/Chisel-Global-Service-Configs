import * as globalServicePortMappings from '../configs/globalServicePortMappings.json';

export interface ServicePorts {
    http: number;
    https: number;
}

export class GlobalServiceConfigs {
    public getServicePorts(serviceName: string, env: string): ServicePorts {
        return globalServicePortMappings.hasOwnProperty(serviceName) && (globalServicePortMappings as any)[serviceName].hasOwnProperty(env) ? (globalServicePortMappings as any)[serviceName][env] : ({ http: 5000, https: 3000 } as ServicePorts);
    }
}
