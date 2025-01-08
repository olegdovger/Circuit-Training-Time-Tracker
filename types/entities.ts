export interface Preset {
  id: number;
  /**
   * @description Количество подходов
   */
  setCount: number;
  /**
   * @description Количество упражнений
   */
  exerciseCount: number;
  /**
   * @description Длительность упражнения в секундах
   */
  exerciseTimeSeconds: number;
  /**
   * @description Количество секунд между упражнениями
   */
  exerciseRelaxSeconds: number;
  /**
   * @description Количество секунд между подходами
   */
  setRelaxSeconds: number;
}
