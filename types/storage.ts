export type APIStorage = {
	disks: Array<{
		adv_progress: string;
		adv_status: string;
		below_remain_life_mail_notify_thr: false;
		below_remain_life_show_thr: false;
		below_remain_life_thr: false;
		compatibility: string;
		container: {
			order: 0;
			str: string;
			supportPwrBtnDisable: false;
			type: string;
		};
		container_id: 0;
		device: string;
		disable_secera: false;
		diskType: string;
		disk_code: string;
		erase_time: 468;
		exceed_bad_sector_thr: false;
		firm: string;
		firmware_status: string;
		has_system: true;
		i18nNamingInfo: string;
		id: string;
		ihm_testing: false;
		is4Kn: false;
		isSsd: false;
		isSynoDrive: false;
		isSynoPartition: true;
		is_bundle_ssd: false;
		is_erasing: false;
		longName: string;
		model: string;
		name: string;
		num_id: 1;
		order: 1;
		overview_status: string;
		pciSlot: -1;
		perf_testing: false;
		portType: string;
		remain_life: -1;
		remain_life_danger: false;
		remote_info: {
			compatibility: string;
			unc: 0;
		};
		sb_days_left: 0;
		sb_days_left_critical: false;
		sb_days_left_warning: false;
		serial: string;
		size_total: string;
		slot_id: 1;
		smart_progress: string;
		smart_status: string;
		smart_test_limit: 0;
		smart_testing: false;
		status: string;
		support: false;
		temp: 40;
		testing_progress: string;
		testing_type: string;
		tray_status: string;
		ui_serial: string;
		unc: 0;
		used_by: string;
		vendor: string;
	}>;
	env: {
		batchtask: {
			max_task: 64;
			remain_task: 64;
		};
		bay_number: string;
		data_scrubbing: {
			sche_enabled: string;
			sche_status: string;
		};
		ebox: Array<any>;
		fs_acting: false;
		isSyncSysPartition: false;
		is_space_actioning: false;
		isns: {
			address: string;
			enabled: false;
		};
		isns_server: string;
		max_fs_bytes: string;
		max_fs_bytes_1PB: string;
		max_fs_bytes_high_end: string;
		model_name: string;
		showpooltab: false;
		space_size_limit: {
			allocatable_size: 0;
			is_limited: false;
			size_limit: 0;
		};
		status: {
			system_crashed: false;
			system_need_repair: false;
		};
		support: {
			ebox: false;
			raid_cross: false;
			sysdef: true;
		};
		support_fit_fs_limit: true;
		unique_key: string;
		volume_full_critical: 0.1;
		volume_full_warning: 0.2;
	};
	hotSpareConf: {
		cross_repair: true;
		disable_repair: Array<any>;
	};
	hotSpares: Array<any>;
	iscsiLuns: Array<any>;
	iscsiTargets: Array<any>;
	ports: Array<any>;
	storagePools: Array<{
		cacheStatus: string;
		can_do: {
			convert_shr_to_pool: 1;
			delete: true;
			expand_by_disk: 1;
			migrate: {
				to_shr2: 2;
			};
		};
		compatibility: true;
		container: string;
		deploy_path: string;
		desc: string;
		device_type: string;
		disk_failure_number: 0;
		disks: Array<string>;
		drive_type: 0;
		id: string;
		is_actioning: false;
		is_scheduled: false;
		is_writable: true;
		last_done_time: 0;
		limited_disk_number: 12;
		maximal_disk_size: string;
		minimal_disk_size: string;
		next_schedule_time: 0;
		num_id: 1;
		pool_path: string;
		progress: {
			percent: string;
			step: string;
		};
		raidType: string;
		raids: Array<{
			designedDiskCount: 2;
			devices: Array<{
				id: "sdb";
				slot: 1;
				status: "normal";
			}>;
			hasParity: false;
			minDevSize: string;
			normalDevCount: 2;
			raidPath: string;
			raidStatus: 1;
			spares: [];
		}>;
		scrubbingStatus: string;
		size: {
			total: string;
			used: string;
		};
		space_path: string;
		spares: Array<any>;
		ssd_trim: {
			support: string;
		};
		status: string;
		suggestions: [];
		timebackup: false;
		vspace_can_do: {
			drbd: {
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
			flashcache: {
				apply: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
				remove: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
			snapshot: {
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
		};
	}>;
	volumes: Array<{
		atime_checked: false;
		atime_opt: string;
		cacheStatus: string;
		can_do: {
			convert_shr_to_pool: 1;
			delete: true;
			expand_by_disk: 1;
			migrate: {
				to_shr2: 2;
			};
		};
		container: string;
		deploy_path: string;
		desc: string;
		dev_path: string;
		device_type: string;
		disk_failure_number: 0;
		disks: [];
		drive_type: 0;
		eppool_used: string;
		exist_alive_vdsm: false;
		fs_type: string;
		id: string;
		is_acting: false;
		is_actioning: false;
		is_inode_full: false;
		is_scheduled: false;
		is_writable: true;
		last_done_time: 0;
		limited_disk_number: 12;
		max_fs_size: string;
		next_schedule_time: 0;
		num_id: 1;
		pool_path: string;
		progress: {
			percent: string;
			step: string;
		};
		raidType: string;
		scrubbingStatus: string;
		size: {
			free_inode: string;
			total: string;
			total_device: string;
			total_inode: string;
			used: string;
		};
		space_path: string;
		ssd_trim: {
			support: string;
		};
		status: string;
		suggestions: [];
		timebackup: false;
		used_by_gluster: false;
		vol_attribute: string;
		vol_path: string;
		vspace_can_do: {
			drbd: {
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
			flashcache: {
				apply: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
				remove: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
			snapshot: {
				resize: {
					can_do: false;
					errCode: 53504;
					stopService: false;
				};
			};
		};
	}>;
};

export type Storage = {
	disks: Array<{
		id: string;
		name: string;
		model: string;
		vendor: string;
		status: string;
		serial: string;
		temperature: number;
		firmware: {
			version: string;
			status: string;
		};
		location: string;
		"4k": boolean;
		connector: string;
		medium: string;
		size: number;
	}>;
	volumes: Array<{
		id: string;
		name: string;
		status: string;
		raidType: string;
		description: string;
		type: string;
		size: {
			total: number;
			used: number;
		};
		storagePool: string;
	}>;
	storagePools: Array<{
		id: string;
		name: string;
		disks: Array<string>;
		status: string;
		description: string;
		size: {
			total: number;
			used: number;
		};
	}>;
};
