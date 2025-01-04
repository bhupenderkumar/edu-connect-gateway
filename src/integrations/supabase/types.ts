export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attendance: {
        Row: {
          created_at: string | null
          date: string
          id: string
          marked_by: string | null
          status: string
          student_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          marked_by?: string | null
          status: string
          student_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          marked_by?: string | null
          status?: string
          student_id?: string | null
        }
        Relationships: []
      }
      classwork: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          description: string
          grade_id: number | null
          id: string
          images: string[] | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          description: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          description?: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "classwork_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          description: string | null
          id: string
          title: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          description?: string | null
          id?: string
          title: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          description?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string | null
          date: string
          id: string
          message: string
          parent_feedback_id: string | null
          student_id: string | null
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          message: string
          parent_feedback_id?: string | null
          student_id?: string | null
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          message?: string
          parent_feedback_id?: string | null
          student_id?: string | null
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_parent_feedback_id_fkey"
            columns: ["parent_feedback_id"]
            isOneToOne: false
            referencedRelation: "feedback"
            referencedColumns: ["id"]
          },
        ]
      }
      fees: {
        Row: {
          amount: number
          created_at: string | null
          due_date: string
          id: string
          payment_date: string | null
          status: string
          student_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          due_date: string
          id?: string
          payment_date?: string | null
          status: string
          student_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          due_date?: string
          id?: string
          payment_date?: string | null
          status?: string
          student_id?: string | null
        }
        Relationships: []
      }
      grades: {
        Row: {
          display_name: string
          id: number
          name: string
        }
        Insert: {
          display_name: string
          id?: number
          name: string
        }
        Update: {
          display_name?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      homework: {
        Row: {
          assigned_date: string
          created_at: string | null
          created_by: string | null
          description: string
          due_date: string
          grade_id: number | null
          id: string
          images: string[] | null
          subject: string
        }
        Insert: {
          assigned_date: string
          created_at?: string | null
          created_by?: string | null
          description: string
          due_date: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject: string
        }
        Update: {
          assigned_date?: string
          created_at?: string | null
          created_by?: string | null
          description?: string
          due_date?: string
          grade_id?: number | null
          id?: string
          images?: string[] | null
          subject?: string
        }
        Relationships: [
          {
            foreignKeyName: "homework_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
      homework_submissions: {
        Row: {
          attachments: string[] | null
          created_at: string | null
          feedback: string | null
          graded_at: string | null
          graded_by: string | null
          homework_id: string | null
          id: string
          late_submission: boolean | null
          score: number | null
          status: Database["public"]["Enums"]["homework_status"] | null
          student_id: string | null
          submitted_at: string | null
          updated_at: string | null
        }
        Insert: {
          attachments?: string[] | null
          created_at?: string | null
          feedback?: string | null
          graded_at?: string | null
          graded_by?: string | null
          homework_id?: string | null
          id?: string
          late_submission?: boolean | null
          score?: number | null
          status?: Database["public"]["Enums"]["homework_status"] | null
          student_id?: string | null
          submitted_at?: string | null
          updated_at?: string | null
        }
        Update: {
          attachments?: string[] | null
          created_at?: string | null
          feedback?: string | null
          graded_at?: string | null
          graded_by?: string | null
          homework_id?: string | null
          id?: string
          late_submission?: boolean | null
          score?: number | null
          status?: Database["public"]["Enums"]["homework_status"] | null
          student_id?: string | null
          submitted_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "homework_submissions_graded_by_fkey"
            columns: ["graded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "homework_submissions_homework_id_fkey"
            columns: ["homework_id"]
            isOneToOne: false
            referencedRelation: "homework"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "homework_submissions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          title: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      student_grades: {
        Row: {
          created_at: string | null
          created_by: string | null
          date: string
          grade: string
          id: string
          student_id: string | null
          subject: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          date: string
          grade: string
          id?: string
          student_id?: string | null
          subject: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          date?: string
          grade?: string
          id?: string
          student_id?: string | null
          subject?: string
        }
        Relationships: []
      }
      subjects: {
        Row: {
          code: string | null
          created_at: string | null
          credits: number | null
          description: string | null
          grade_id: number | null
          id: number
          is_active: boolean | null
          is_elective: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          credits?: number | null
          description?: string | null
          grade_id?: number | null
          id?: number
          is_active?: boolean | null
          is_elective?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          credits?: number | null
          description?: string | null
          grade_id?: number | null
          id?: number
          is_active?: boolean | null
          is_elective?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subjects_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_assignments: {
        Row: {
          academic_year: string | null
          created_at: string | null
          end_date: string | null
          grade_id: number | null
          hours_per_week: number | null
          id: string
          is_primary: boolean | null
          start_date: string | null
          subject_id: number | null
          teacher_id: string | null
          updated_at: string | null
        }
        Insert: {
          academic_year?: string | null
          created_at?: string | null
          end_date?: string | null
          grade_id?: number | null
          hours_per_week?: number | null
          id?: string
          is_primary?: boolean | null
          start_date?: string | null
          subject_id?: number | null
          teacher_id?: string | null
          updated_at?: string | null
        }
        Update: {
          academic_year?: string | null
          created_at?: string | null
          end_date?: string | null
          grade_id?: number | null
          hours_per_week?: number | null
          id?: string
          is_primary?: boolean | null
          start_date?: string | null
          subject_id?: number | null
          teacher_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teacher_assignments_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_assignments_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teacher_assignments_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_feedback: {
        Row: {
          created_at: string | null
          date: string
          id: string
          message: string
          student_id: string | null
          subject: string
          teacher_id: string | null
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: string
          message: string
          student_id?: string | null
          subject: string
          teacher_id?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          message?: string
          student_id?: string | null
          subject?: string
          teacher_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          address: string | null
          admission_date: string | null
          alternate_phone: string | null
          blood_group: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string
          email_verified: boolean | null
          emergency_contact: string | null
          full_name: string
          gender: string | null
          grade_id: number | null
          id: string
          is_active: boolean | null
          last_login: string | null
          metadata: Json | null
          parent_email: string | null
          parent_name: string | null
          parent_phone: string | null
          phone_number: string | null
          profile_image_url: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          admission_date?: string | null
          alternate_phone?: string | null
          blood_group?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          email_verified?: boolean | null
          emergency_contact?: string | null
          full_name: string
          gender?: string | null
          grade_id?: number | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          metadata?: Json | null
          parent_email?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          admission_date?: string | null
          alternate_phone?: string | null
          blood_group?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          email_verified?: boolean | null
          emergency_contact?: string | null
          full_name?: string
          gender?: string | null
          grade_id?: number | null
          id?: string
          is_active?: boolean | null
          last_login?: string | null
          metadata?: Json | null
          parent_email?: string | null
          parent_name?: string | null
          parent_phone?: string | null
          phone_number?: string | null
          profile_image_url?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_grade_id_fkey"
            columns: ["grade_id"]
            isOneToOne: false
            referencedRelation: "grades"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      enable_rls_on_all_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      uuid_generate_v1: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v1mc: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v3: {
        Args: {
          namespace: string
          name: string
        }
        Returns: string
      }
      uuid_generate_v4: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_generate_v5: {
        Args: {
          namespace: string
          name: string
        }
        Returns: string
      }
      uuid_nil: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_dns: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_oid: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_url: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      uuid_ns_x500: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      attendance_status: "present" | "absent" | "late"
      fee_status: "paid" | "pending" | "overdue"
      homework_status: "pending" | "submitted" | "graded"
      user_role: "admin" | "teacher" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
