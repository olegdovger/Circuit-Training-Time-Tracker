export interface Preset {
  /**
   * @description Количество подходов
   */
  approaches: number;
  /**
   * @description Количество упражнений
   */
  exercises: number;
  /**
   * @description Длительность упражнения в секундах
   */
  exerciseDuration: number;
  /**
   * @description Количество секунд между упражнениями
   */
  exercisePauseDuration: number;
  /**
   * @description Количество секунд между подходами
   */
  approachPauseDuration: number;
}
