import _ from "lodash";
export function parseEnv(env){
    const envs = _.cloneDeep(env); // 深拷贝

    Object.entries(env).forEach(([key, value]) => { 
        if (value === "true" || value === "false") {
            envs[key] = value === "true" ? true : false;
        }
        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value);
        }
    });

    return envs;
}