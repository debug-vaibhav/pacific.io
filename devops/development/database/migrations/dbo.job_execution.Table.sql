USE [worker]
GO
/****** Object:  Table [dbo].[job_execution]    Script Date: 10-07-2021 11:59:39 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job_execution](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[job_id] [int] NULL,
	[status] [nvarchar](20) NULL,
	[next_execution_time] [datetime] NULL,
	[last_execution_date] [datetime] NULL,
	[last_execution_by] [int] NULL,
	[updated_date] [datetime] NULL,
	[updated_by] [int] NULL,
	[is_deleted] [bit] NULL,
PRIMARY KEY CLUSTERED
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[job_execution]  WITH CHECK ADD  CONSTRAINT [FK_job_execution.job_id] FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([id])
GO
ALTER TABLE [dbo].[job_execution] CHECK CONSTRAINT [FK_job_execution.job_id]
GO
