const serviceMapping = require('./globalServicePortMappings.json');

export interface ServicePorts {
    http: number;
    https: number;
}

export class GlobalServiceConfigs {
    public getServicePorts(serviceName: string, env: string): ServicePorts {
        return serviceMapping.hasOwnProperty(serviceName) &&  serviceMapping[serviceName].hasOwnProperty(env) ? serviceMapping[serviceName][env] : ({ http: 5000, https: 3000 } as ServicePorts);
    }
}
