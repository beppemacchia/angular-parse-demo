import Parse from 'parse';

export class InstallationModel extends Parse.Installation {
  public static className = '_Installation';

  public static fields = {
    objectId: 'objectId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ACL: 'ACL',
    installationId: 'installationId',
    deviceToken: 'deviceToken',
    channels: 'channels',
    deviceType: 'deviceType',
    pushType: 'pushType',
    GCMSenderId: 'GCMSenderId',
    timeZone: 'timeZone',
    localeIdentifier: 'localeIdentifier',
    badge: 'badge',
    appVersion: 'appVersion',
    appName: 'appName',
    appIdentifier: 'appIdentifier',
    parseVersion: 'parseVersion',
  };

  constructor() {
    super();
  }

  public static registerParseSubclass(): void {
    Parse.Object.registerSubclass(InstallationModel.className, InstallationModel);
  }

  public get objectId(): string {
    return this.get(InstallationModel.fields.objectId);
  }

  public get ACL(): Parse.ACL {
    return this.get(InstallationModel.fields.ACL);
  }

  public set ACL(ACL: Parse.ACL) {
    this.set(InstallationModel.fields.ACL, ACL);
  }

  public get GCMSenderId(): string {
    return this.get(InstallationModel.fields.GCMSenderId);
  }

  public set GCMSenderId(GCMSenderId: string) {
    this.set(InstallationModel.fields.GCMSenderId, GCMSenderId);
  }

  public get localeIdentifier(): string {
    return this.get(InstallationModel.fields.localeIdentifier);
  }

  public set localeIdentifier(localeIdentifier: string) {
    this.set(InstallationModel.fields.localeIdentifier, localeIdentifier);
  }
}
