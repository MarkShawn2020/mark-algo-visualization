export interface AlgoInfoProps {
  id?: string;
  name?: string; // 如果没有name，则默认nav的最后一个
  path?: string; // 如果没有path，则默认文件路由
  nav: Array<string>;
  intro?: string;
}

export interface DAlgoCtrl {
  init: any;
  next: any;
  stop: any;
  extra?: any[];
}

export interface DAlgoCase {
  init: string;
  modify?: any;
  reset?: any;
  save?: any;
}

export interface IAlgoLog {
  init: string;
  content?: string[];
  info?: any;
  clear?: any;
  warning?: any;
  error?: any;
}

export interface DAlgoVisualization {
  info: AlgoInfoProps;
  tCase: DAlgoCase;
  ctrl?: DAlgoCtrl;
  log?: IAlgoLog;
  children: any;
}
