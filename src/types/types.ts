export interface Plant {
  id: number;
  name: string;
  photo: string;
  about: string;
  water_tips: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
  hour: string;
  dateTimePickerNotification: Date;
}

export interface StoragedPlants {
  [id: string]: {
    data: Plant;
    notificationId: string;
  }
}