import nrdbQuery from "../query";
export const accountId = 3884245;


export const cloudfrontend = async () => {
    let cloudquery = `FROM K8sNodeSample select filter(average(cpuUsedCores) / average(allocatableCpuCores) * 100, where eventType() = 'K8sNodeSample') as 'CPU', filter(average(memoryWorkingSetBytes / allocatableMemoryBytes * 100), where eventType() = 'K8sNodeSample') as 'mem', filter(max(fsUsedBytes / fsCapacityBytes) * 100, where eventType() = 'K8sNodeSample') as 'disk', latest(condition.DiskPressure) AS 'diskPressure',latest(condition.MemoryPressure) AS 'memoryPressure',latest(condition.KubeletProblem) AS 'kubeltProblem',latest(condition.PIDPressure) AS 'pidPressure',latest(net.errorsPerSecond) AS 'errorsPerSecond' where clusterName='Microservices_cluster_ceq' facet nodeName limit 2000 since 30 minutes ago`
    let clouddata = await nrdbQuery(accountId, cloudquery)
    return clouddata
  }

export const FetchDataFromQuery = async () => {
    let cloudquery = `SELECT uniqueCount(targetEntityGuid) from Relationship Where sourceEntityGuid IN ('Mzg4NDI0NXxOUjF8V09SS0xPQUR8MTUyNTUz') and targetDomain is NOT NULL facet targetEntityGuid,sourceEntityGuid,targetDomain limit MAX`
    let clouddata = await nrdbQuery(accountId, cloudquery)
    return clouddata
  }

export const RenderFilterSyncData = async (syncData) => {
    let query = `From SyntheticCheck SELECT  latest(result),latest(error) where entityGuid IN ('${syncData}') FACET entityGuid ,monitorName SINCE this quarter`
    let SyncData = await nrdbQuery(accountId, query)
    return SyncData
  }